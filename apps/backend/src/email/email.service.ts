import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import nodemailer, { Transporter } from 'nodemailer';
import * as fs from 'fs';
import path from 'path';

export interface SendEmailOptions {
  to: string;
  subject: string;
  template: string;
  context: Record<string, any>;
}

interface MailResult {
  messageId: string;
  accepted: string[];
  rejected: string[];
}

@Injectable()
export class EmailService {
  private transporter: Transporter;
  private readonly logger = new Logger(EmailService.name);

  constructor(private configService: ConfigService) {
    this.transporter = nodemailer.createTransport({
      host: this.configService.get<string>('SMTP_HOST'),
      port: this.configService.get<number>('SMTP_PORT'),
      secure: this.configService.get<boolean>('SMTP_SECURE'),
      auth: {
        user: this.configService.get<string>('SMTP_USER'),
        pass: this.configService.get<string>('SMTP_PASSWORD'),
      },
    });
  }

  async sendEmail(options: SendEmailOptions) {
    try {
      const templatePath = path.join(
        __dirname,
        'templates',
        `${options.template}.hbs`,
      );
      // Here you would load and compile the template with the context
      const templateSource = fs.readFileSync(templatePath, 'utf-8');
      const template = Handlebars.compile(templateSource);
      const html = template(options.context);

      // Send the email
      const info = (await this.transporter.sendMail({
        from: this.configService.get<string>('EMAIL_FROM'),
        to: options.to,
        subject: options.subject,
        html,
      })) as MailResult;
      this.logger.log(`Email sent: ${info.messageId}    to ${options.to}`);
    } catch (error) {
      this.logger.error(`Failed to send email to ${options.to}:`, error);
      throw error;
    }
  }

  // Send password reset email
  async sendPasswordResetEmail(
    email: string,
    name: string,
    resetToken: string,
  ): Promise<void> {
    const resetUrl = `${this.configService.get('PASSWORD_RESET_URL')}?token=${resetToken}`;

    await this.sendEmail({
      to: email,
      subject: 'Reset Your Password',
      template: 'password-reset',
      context: {
        name,
        resetUrl,
        expirationTime: '1 hour',
      },
    });
  }

  // Send password changed confirmation email
  async sendPasswordChangedEmail(email: string, name: string): Promise<void> {
    await this.sendEmail({
      to: email,
      subject: 'Your Password Has Been Changed',
      template: 'password-changed',
      context: {
        name,
      },
    });
  }

  //  Test email configuration
  async testConnection(): Promise<boolean> {
    try {
      await this.transporter.verify();
      this.logger.log('Email configuration is valid');
      return true;
    } catch (error) {
      this.logger.error('Email configuration is invalid:', error);
      return false;
    }
  }
}

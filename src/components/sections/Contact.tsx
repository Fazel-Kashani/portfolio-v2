
import SectionWrapper from '../SectionWrapper';
import { Button } from "@/components/ui/button";
import { Phone, Mail, Instagram } from 'lucide-react';

const Contact = () => {
  const contactMethods = [
    {
      name: 'تلگرام',
      icon: Phone,
      href: 'https://t.me/Fazel_Kashanii',
    },
    {
      name: 'ایمیل',
      icon: Mail,
      href: 'mailto:fazelkashani339@gmail.com',
    },
    {
      name: 'تماس تلفنی',
      icon: Phone,
      href: 'tel:+989023316069',
    },
    {
      name: 'اینستاگرام',
      icon: Instagram,
      href: 'https://www.instagram.com/fazelkashanii/',
    },
  ];

  return (
    <SectionWrapper id="contact">
      <h2 className="text-3xl font-bold text-center mb-12">تماس با من</h2>
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-wrap justify-center gap-4">
          {contactMethods.map((method) => (
            <Button
              key={method.name}
              asChild
              size="default"
              className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 rounded-input px-6 py-3 flex items-center gap-2"
            >
              <a href={method.href} target="_blank" rel="noopener noreferrer">
                <method.icon className="h-5 w-5" />
                <span className="text-sm font-medium">{method.name}</span>
              </a>
            </Button>
          ))}
        </div>
        <div className="text-center mt-8">
          <p className="text-muted-foreground">
            برای ارتباط با من روی هر کدام از دکمه‌های بالا کلیک کنید
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;

import SectionWrapper from '../SectionWrapper';

const experienceData = [
  {
    title: 'توسعه دهنده وردپرس',
    company: 'فریلنسری',
    period: ' مرداد ۱۴۰۳ - تاکنون',
    description: ' طراحی و توسعه سایت‌های وردپرسی برای کسب و کارهای کوچک،شامل مدیریت پروژه و اجرای کامل فرایند طراحی و پیاده‌سازی فنی.'
  },
  {
  title: 'گرافیست ارشد',
  company: 'مجموعه چاپ خرمی',
  period: ' خرداد ۱۴۰۲  - مرداد ۱۴۰۳ ',
  description: 'طراحی طیف وسیعی از اقلام تبلیغاتی چاپی و دیجیتال برای کسب کارهای آنلاین و سنتی مانند بنر، کارت ویزیت، قالب پست و استوری فضای مجازی و بنر سایت.'
},
  
];

const Experience = () => {
  return (
    <SectionWrapper id="experience">
      <h2 className="text-3xl font-bold text-center mb-12">سابقه کاری</h2>
      <div className="relative max-w-2xl mx-auto">
        <div className="absolute right-4 top-0 h-full w-0.5 bg-border"></div>
        {/* Gradient fade at the bottom of the timeline */}
        <div className="pointer-events-none absolute right-4 bottom-0 w-4 h-12 translate-x-1/2 z-10" style={{ pointerEvents: 'none' }}>
          <div className="w-0.5 h-full bg-gradient-to-b from-transparent to-card mx-auto"></div>
        </div>
        {experienceData.map((item, index) => (
          <div key={index} className="mb-8 pr-12 relative">
            <div className="absolute right-4 top-1 translate-x-1/2">
              <div className="w-4 h-4 rounded-full bg-background border-2 border-primary"></div>
            </div>
            <p className="text-sm font-semibold text-muted-foreground mb-1">{item.period}</p>
            <h3 className="mb-1 font-bold text-lg text-primary">{item.title}</h3>
            <p className="text-sm font-semibold text-muted-foreground mb-2">{item.company}</p>
            <p className="text-sm leading-snug tracking-wide text-muted-foreground">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Experience;

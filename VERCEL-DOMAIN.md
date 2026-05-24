# ربط النطاق الرسمي (مهم جداً)

## لماذا يظهر تحذير على sederrgroup.vercel.app؟

- `*.vercel.app` نطاق **تجريبي** من Vercel وليس موقع الشركة الرسمي.
- الموقع المعتمد للمجموعة: **https://sedergroup.com**
- LinkedIn المعتمد: **https://www.linkedin.com/company/seder-group-sg**
- محركات البحث لا تثق بنفس قوة النطاق الرسمي `sederrgroup.com`.

## الخطوات في Vercel

1. افتح مشروعك في [Vercel Dashboard](https://vercel.com).
2. **Settings → Domains**
3. أضف: `sederrgroup.com` و `www.sederrgroup.com`
4. في لوحة تحكم النطاق (Hostinger أو غيره) أضف سجلات DNS كما يطلب Vercel (عادة `A` أو `CNAME`).
5. بعد التفعيل، الزوار على `sederrgroup.vercel.app` يُحوَّلون تلقائياً إلى `sederrgroup.com`.

## Google Search Console

1. سجّل **sederrgroup.com** (وليس vercel.app).
2. أرسل: `https://sederrgroup.com/sitemap.xml`

## إذا لم يكن لديك sederrgroup.com

اطلب من قسم IT في SEDER GROUP إنشاء نطاق فرعي مثل:

`services.sedergroup.com`

ثم غيّر `siteUrl` في `js/site-config.js` إلى هذا النطاق.

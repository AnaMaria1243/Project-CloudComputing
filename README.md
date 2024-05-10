Link publicare: https://project-cloud-computing-phi.vercel.app/

Link video prezentare: https://youtu.be/yBLmhcuViNo

Link GitHub: https://github.com/AnaMaria1243/Project-CloudComputing


1.	Introducere

	Cloudul se referă la furnizarea de servicii de stocare și gestionare a datelor și alte resurse IT printr-o rețea de servere remote. Aceste servicii sunt oferite de furnizori de servicii cloud, care gestionează și operează infrastructura și permit utilizatorilor să acceseze resursele în funcție de nevoile lor, fără a fi nevoie să dețină sau să gestioneze hardware-ul și software-ul asociat în mod direct. Folosirea cloudului poate aduce beneficii precum scalabilitate, accesibilitate de la distanță, costuri reduse și flexibilitate în gestionarea infrastructurii IT, plătind doar pentru ceea ce este  folosit, fără a fi nevoie să investească în infrastructură fizică. Serviciile cloud sunt diverse în funcție de obiectivele organizaționale, cerințele tehnice și restricțiile bugetare pe care și le impune fiecare utilizator. Cloud-ul este soluția eficientă care răspunde  tuturor nevoilor care apar în cadrul unei organizații și nu numai.

2.  Descriere problemă

	Aplicația pe care am dezvoltat-o este destinată rețetelor preparatelor dulci care este un tot unitar sub forma unei colecții de deserturi și își propune să redefinească experiența cărților de rețete clasice. Această aplicație oferă o experiență interactivă și captivantă utilizatorilor, permitându-le să exploreze o varietate de rețete dulci, să descopere noi tehnici de preparare și să creeze propriile lor colecții personalizate de rețete preferate. Cu un design intuitiv, aplicația facilitează accesul la inspirație culinară și încurajează pasiunea pentru deserturi.

3. Descriere tehnologii cloud folosite

	Tehnologiile folosite sunt:
-	Visual Studio Code: editor de cod open-source -> JavaScript și HTML
-	Node.js: pentru a dezvolta API-ul back-end al aplicației, care va gestiona solicitările utilizatorilor, va procesa datele și va comunica cu baza de date
-	Next.js: framework React pentru dezvoltarea interfeței utilizatorului
-	MongoDB:  bază de date NoSQL performantă și scalabilă
-	Vercel: pentru a implementa aplicația în cloud 
-	GitHub: platformă de găzduire web pentru cod sursă

4. Flux de date: exemple de request / response și metode HTTP

	Metodele HTTP folosite sunt: 
GET: Utilizat pentru aextrage retele din baza de date
POST: Utilizat pentru a crea rețete de deserturi noi
PUT: Utilizat pentru a actualiza rețetele
DELETE: Utilizat pentru a șterge desertul

	Exemple de request / response:

export const sendOk = (res, data) => {
    res.status(200).json(
        {
            'data': data,
        }
    );
};

export const sendNotFound = (res, message) => {
    res.status(404).json(
        {
            'error': message,
        }
    );
};

 	5.Capturi de ecran
Colecția de rețete extrasă din baza de date:
![Colecția de rețete extrasă din baza de date](https://github.com/AnaMaria1243/Project-CloudComputing/assets/114759453/97e21662-3c03-49d9-b091-a0dea2d7aa64)
![Butoanele de adăugare rețetă, editare rețetă și ștergere](https://github.com/AnaMaria1243/Project-CloudComputing/assets/114759453/4e3f778b-5521-4c73-852e-2c77e592c44f)
![Formularul de creare rețetă,](https://github.com/AnaMaria1243/Project-CloudComputing/assets/114759453/2d8700fb-f13b-45f8-bc4b-fd7c8828bc20)
![Formularul de editare](https://github.com/AnaMaria1243/Project-CloudComputing/assets/114759453/05dac0ce-7729-4719-84c0-5e8a55ce720c)



Link publicare: https://project-cloud-computing-phi.vercel.app/

Link video prezentare: https://youtu.be/yBLmhcuViNo

Link GitHub: https://github.com/AnaMaria1243/Project-CloudComputing




This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

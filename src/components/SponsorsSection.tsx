const sponsors = [
  {
    name: "BF Goodrich Tires",
    url: "http://www.bfgoodrichtires.com/",
    imgSrc: "/images/logos/tirecompanies/bfgoodrich.svg",
    alt: "BF Goodrich Tires",
  },
  {
    name: "Bridgestone Tires",
    url: "http://www.bridgestonetire.com/",
    imgSrc: "/images/logos/tirecompanies/bridgestone.svg",
    alt: "Bridgestone Tires",
  },
  {
    name: "Continental Tires",
    url: "http://www.conti-online.com/generator/www/us/en/continental/automobile/general/home/index_en.html",
    imgSrc: "/images/logos/tirecompanies/continental.svg",
    alt: "Continental Tires",
  },
  {
    name: "Dunlop Tires",
    url: "http://www.dunloptires.com/en-US/tires-home",
    imgSrc: "/images/logos/tirecompanies/dunlop.svg",
    alt: "Dunlop Tires",
  },
  // {
  //   name: "Falken Tires",
  //   url: "http://www.falken.tires",
  //   imgSrc: "/images/logos/tirecompanies/falken.png",
  //   alt: "Falken Tires",
  // },
  // {
  //   name: "Firestone Tires",
  //   url: "http://www.firestone.com/",
  //   imgSrc: "/images/logos/tirecompanies/firestone.png",
  //   alt: "Firestone Tires",
  // },
  // {
  //   name: "General Tires",
  //   url: "http://www.generaltire.com/",
  //   imgSrc: "/images/logos/tirecompanies/general.png",
  //   alt: "General Tires",
  // },
  // {
  //   name: "Goodyear Tires",
  //   url: "http://www.goodyear.com/",
  //   imgSrc: "/images/logos/tirecompanies/goodyear.png",
  //   alt: "Goodyear Tires",
  // },
  // {
  //   name: "Toyo Tires",
  //   url: "http://www.toyotires.com/",
  //   imgSrc: "/images/logos/tirecompanies/ToyoTiresNoTag_blue.png",
  //   alt: "Toyo Tires",
  // },
  // {
  //   name: "Hankook Tires",
  //   url: "http://www.hankooktireusa.com/Main/default.aspx",
  //   imgSrc: "/images/logos/tirecompanies/hankook.png",
  //   alt: "Hankook Tires",
  // },
  // {
  //   name: "Kumho Tires",
  //   url: "http://www.kumhotireusa.com/",
  //   imgSrc: "/images/logos/tirecompanies/kumho.png",
  //   alt: "Kumho Tires",
  // },
  // {
  //   name: "Michelin Tires",
  //   url: "http://www.michelinman.com/",
  //   imgSrc: "/images/logos/tirecompanies/michelin.png",
  //   alt: "Michelin Tires",
  // },
  // {
  //   name: "Pirelli Tires",
  //   url: "http://www.pirelli.com/tire/us/en/homepage.html",
  //   imgSrc: "/images/logos/tirecompanies/pirelli.png",
  //   alt: "Pirelli Tires",
  // },
  // {
  //   name: "Yokohama Tires",
  //   url: "http://www.yokohamatire.com/",
  //   imgSrc: "/images/logos/tirecompanies/yokohama.png",
  //   alt: "Yokohama Tires",
  // },
];

const SponsorsSection = () => {
  return (
    <section className="bg-grayLight py-8">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4 text-primary">Our Sponsors</h2>
        <p className="text-gray-700 mb-8">
          We are proud to be sponsored by these amazing companies.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {sponsors.map((sponsor) => (
            <a
              href={sponsor.url}
              target="_blank"
              rel="noopener noreferrer"
              key={sponsor.name}
              className="flex justify-center">
              <img
                src={sponsor.imgSrc}
                alt={sponsor.alt}
                className="h-16 w-auto"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;

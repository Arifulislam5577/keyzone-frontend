import A4Tech from "../../assets/brands/A4Tech.png";
import BenQ from "../../assets/brands/benQ.png";
import Dell from "../../assets/brands/dell.png";
import HPLogo from "../../assets/brands/hp.png";
import Samsung from "../../assets/brands/samsung.png";

const FeaturedBrand = () => {
  const logos = [
    {
      id: 1,
      name: "HP",
      src: HPLogo,
    },
    {
      id: 2,
      name: "A4Tech",
      src: A4Tech,
    },
    {
      id: 3,
      name: "BenQ",
      src: BenQ,
    },
    {
      id: 4,
      name: "Dell",
      src: Dell,
    },
    {
      id: 5,
      name: "Samsung",
      src: Samsung,
    },
  ];

  return (
    <div className="py-12">
      <div className="max-w-md mx-auto text-center pb-8">
        <h3 className="text-heading-5 font-semibold text-metal-900">
          Our Brand Collection
        </h3>
        <p className="text-body-4 font-normal text-metal-600 mt-2">
          Discover our extensive collection of top-selling brands, each renowned
          for their exceptional quality, innovative designs, and customer
          satisfaction
        </p>
      </div>
      <div className="grid lg:grid-cols-5 md:grid-cols-3 col-span-1 items-center gap-2">
        {logos.map((logo) => (
          <div key={logo.id} className="md:col-span-1 w-full">
            <div className="bg-white rounded-xl p-5 ">
              <div className="w-24 h-20 object-contain mx-auto">
                <img src={logo.src} alt={logo.name} />
              </div>
              <div className="mt-4 text-center">
                <p className="text-body-2 font-medium">{logo.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedBrand;

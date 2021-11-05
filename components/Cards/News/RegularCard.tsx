import Image from "next/image";

const NewsRegularCard = () => {
  return (
    <div className=" space-y-2 md:space-y-4 ">
      <div className="flex flex-row-reverse space-y-4 md:space-y-4 md:flex-col items-center md:items-start md:space-x-0">
        <div className="h-full md:w-full  w-[30%] ">
          <div className="aspect-w-1 aspect-h-1 md:aspect-w-16 md:aspect-h-9 ">
            <Image
              layout="fill"
              className="object-cover object-center"
              src="https://images.unsplash.com/photo-1583946099379-f9c9cb8bc030?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y29yb25hfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="gambar"
            />
          </div>
        </div>

        <div className="flex flex-col space-y-4 flex-3 w-[70%] md:w-full mr-2 md:mr-0">
          <div className="space-y-2">
            <div className="flex space-x-2 items-center">
              <h6 className="font-dinamit-medium text-[0.5rem] sm:text-label-small tracking-widest uppercase">
                Health
              </h6>
              <div className="h-[2px] w-[16px] lg:w-[18px] bg-red-800"></div>
            </div>
            <h1 className="font-nocturno-regular text-title-medium sm:text-title-large">
              Do we need to draw you a picture? Yes, or maybe a satiric cartoon
            </h1>
          </div>
        </div>
      </div>
      <div className="font-dinamit-light text-body-small">
        <p>
          MGH scholars say pandemic showed need for new ways to make public
          health messaging more persuasive
        </p>
      </div>
    </div>
  );
};

export default NewsRegularCard;

import autoPlay from "embla-carousel-autoplay";
import { Carousel, CarouselSlides } from "keep-react";
import { Quotes } from "phosphor-react";
import Avatar1 from "../../assets/users/avatar-1.png";
import Avatar2 from "../../assets/users/avatar-2.png";
import Avatar3 from "../../assets/users/avatar-3.png";
import Avatar4 from "../../assets/users/avatar-4.png";
import Avatar5 from "../../assets/users/avatar-5.png";

const UserReview = () => {
  const reviews = [
    {
      id: "review001",
      userName: "John Doe",
      position: "Software Engineer",
      img: Avatar1,
      reviewText:
        "I have been using the XYZ keyboard for over a month now, and it has significantly improved my typing speed and accuracy. The keys are responsive and the build quality is top-notch. Highly recommended for professionals!",
    },
    {
      id: "review002",
      userName: "Jane Smith",
      position: "Graphic Designer",
      img: Avatar2,
      reviewText:
        "The XYZ keyboard is a game-changer for my workflow. The customizable keys and ergonomic design make long hours at the desk much more comfortable. It’s stylish and functional, which is a rare combination. Love it!",
    },
    {
      id: "review003",
      userName: "Alice Johnson",
      position: "Content Writer",
      img: Avatar3,
      reviewText:
        "As a writer, I spend countless hours typing, and the XYZ keyboard has been a fantastic upgrade. The tactile feedback is perfect, and the backlighting is a nice touch for late-night work sessions. Worth every penny!",
    },
    {
      id: "review004",
      userName: "Michael Brown",
      position: "IT Manager",
      img: Avatar4,
      reviewText:
        "The XYZ keyboard is the best investment I’ve made for my home office. It’s durable, with a sleek design and the key travel is just right. My team also loves it, and we’re planning to get more for the office!",
    },
    {
      id: "review005",
      userName: "Emily Davis",
      position: "Student",
      img: Avatar5,
      reviewText:
        "The XYZ keyboard is fantastic for both gaming and studying. The keys are smooth and it’s very quiet, which is great for shared spaces. The customizable RGB lighting adds a fun touch, making it both practical and stylish!",
    },
  ];

  return (
    <div className="py-12">
      <div className="max-w-md mx-auto text-center pb-8">
        <h3 className="text-heading-5 font-semibold text-metal-900">
          Our Client Story
        </h3>
        <p className="text-body-4 font-normal text-metal-600 mt-2">
          Our satisfied clients and learn how our top-selling brands have
          enhanced their lives with unmatched quality, cutting-edge designs, and
          exceptional customer service.
        </p>
      </div>
      <div className="max-w-3xl mx-auto">
        <Carousel options={{ loop: true }} plugins={[autoPlay()]}>
          <CarouselSlides>
            {reviews.map((review) => (
              <div key={review.id} className="flex-[0_0_100%] pl-4">
                <div className="bg-white rounded-xl p-8">
                  <div className="w-16 h-16 mx-auto mb-4 object-contain rounded-full overflow-hidden border-2 border-error-200">
                    <img src={review.img} alt={review.userName} />
                  </div>
                  <div className="md:text-body-3 text-body-4 text-center lg:max-w-lg text-metal-600 mx-auto relative max-w-xs">
                    <Quotes
                      size={60}
                      className="absolute -top-10 -left-16 opacity-20 rotate-180"
                    />
                    {review.reviewText}
                    <Quotes
                      size={60}
                      className="absolute -bottom-10 -right-8 opacity-20"
                    />
                  </div>

                  <div className="flex flex-col items-center mt-4 justify-center">
                    <div className="text-center mt-4">
                      <p className="text-body-1 font-medium text-metal-900">
                        {review.userName}
                      </p>
                      <p className="text-body-5 font-medium text-metal-600">
                        {review.position}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </CarouselSlides>
        </Carousel>
      </div>
    </div>
  );
};

export default UserReview;

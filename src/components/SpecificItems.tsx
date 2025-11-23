import diningHallImage from "@/assets/DINING HALL + KITCHEN (Item 13).jfif";
import gazeboImage from "@/assets/GAZEBO.jfif";
import rainwaterTankImage from "@/assets/RAINWATER TANK (100,000L) (9m Dia, 2.6m H)  PROPOSED BUSHFIRE TANK (60,000L).jfif";
import groundSurfacesImage from "@/assets/Ground surfaces Granitic Sand, Timber Seats.jfif";

const items = [
  {
    number: 13,
    title: "Dining Hall + Kitchen",
    description: "The central hub for all food service operations, featuring a modern commercial kitchen and spacious dining area. Designed to accommodate large groups while maintaining an intimate connection with the surrounding landscape through large windows and outdoor dining options.",
    image: diningHallImage
  },
  {
    title: "Gazebo",
    description: "An elegant outdoor gathering structure providing sheltered space for events, casual dining, and social gatherings. Features natural timber construction that harmonizes with the fire-resistant landscape design.",
    image: gazeboImage
  },
  {
    title: "Rainwater Tank (100,000L) & Bushfire Tank (60,000L)",
    description: "Essential water infrastructure including a massive 100,000-liter rainwater harvesting tank (9m diameter, 2.6m height) for sustainable water use, plus a dedicated 60,000-liter bushfire protection tank for safety systems.",
    image: rainwaterTankImage
  },
  {
    title: "Wastewater Systems",
    description: "Comprehensive wastewater management including Sewage Septic Tank, Ground Tank, and Grease Interceptor systems. Designed to handle the high-capacity demands of the dining hall while protecting the natural environment.",
    image: groundSurfacesImage
  },
  {
    title: "Ground Surfaces",
    description: "Natural granitic sand pathways and timber seating areas create comfortable, permeable surfaces that blend seamlessly with the landscape while providing durable, low-maintenance gathering spaces.",
    image: groundSurfacesImage
  }
];

export const SpecificItems = () => {
  return (
    <section className="py-12 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Specific Items</h2>
          <div className="w-16 h-1 bg-accent mx-auto" />
        </div>

        <div className="space-y-12">
          {items.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-12 items-center animate-fade-up`}
            >
              <div className="flex-1">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[360px] object-cover rounded-lg shadow-elevated"
                />
              </div>
              <div className="flex-1 space-y-4">
                {item.number && (
                  <div className="inline-block px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-semibold">
                    Item {item.number}
                  </div>
                )}
                <h3 className="text-3xl md:text-4xl font-bold">{item.title}</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

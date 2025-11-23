import { Utensils, Trees, Building2, Users, Flame } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Utensils,
    title: "Main Food Service",
    description: "Houses the central Dining Hall and Kitchen (Item 13) for guest meals and events."
  },
  {
    icon: Building2,
    title: "Guest Administration",
    description: "Admin Block and Gathering Building for retreat management and guest services."
  },
  {
    icon: Trees,
    title: "Open Areas with Winding Paths",
    description: "Spacious gathering areas connected by naturally flowing pathways."
  },
  {
    icon: Flame,
    title: "Fire-Resistant Planting",
    description: "Strategic landscaping with fire-resistant species for safety and beauty."
  },
  {
    icon: Users,
    title: "Central Gathering Spaces",
    description: "Designed for connection and community with the Gazebo and outdoor dining areas."
  }
];

export const Features = () => {
  return (
    <section className="py-12 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Features</h2>
          <div className="w-16 h-1 bg-accent mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-border animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8">
                <div className="mb-6 inline-flex p-4 rounded-lg bg-nature-green-light group-hover:bg-accent transition-colors">
                  <feature.icon className="h-8 w-8 text-nature-green group-hover:text-accent-foreground transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

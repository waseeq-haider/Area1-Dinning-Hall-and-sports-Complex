// Final Mockup Images
import diningHallMain from "@/assets/Dining Hall and sports complex.png";
import area1_01 from "@/assets/area1_01.png";
import area1_02 from "@/assets/area1_02.png";
import area1_03 from "@/assets/area1_03.png";

// Feature Images
import openAreasImage from "@/assets/Open areas with winding paths.  Planting is fire-resistant.  Houses main food service and guest administration facilities..jfif";
import diningHallKitchen from "@/assets/DINING HALL + KITCHEN (Item 13).jfif";
import gazebo from "@/assets/GAZEBO.jfif";
import rainwaterTank from "@/assets/RAINWATER TANK (100,000L) (9m Dia, 2.6m H)  PROPOSED BUSHFIRE TANK (60,000L).jfif";
import groundSurfaces from "@/assets/Ground surfaces Granitic Sand, Timber Seats.jfif";

// Reference Images
import bottleTree from "@/assets/Trees Bottle Tree.jfif";
import italianPencilPine from "@/assets/Italian Pencil Pine.jfif";
import groundCovers from "@/assets/Ground covers Foxtail Agave, Pigs Ears  Design by Sandara Passos and Veronica Bosque.jfif";

import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const galleryImages = [
  // Final Mockups - Overview
  { src: diningHallMain, alt: "Dining Hall & Sports Complex - Main View", category: "Overview" },
  { src: area1_01, alt: "Area 1 - Perspective 1", category: "Overview" },
  { src: area1_02, alt: "Area 1 - Perspective 2", category: "Overview" },
  { src: area1_03, alt: "Area 1 - Perspective 3", category: "Overview" },

  // Features
  { src: openAreasImage, alt: "Open Areas with Winding Paths", category: "Features" },
  { src: diningHallKitchen, alt: "Dining Hall + Kitchen (Item 13)", category: "Features" },
  { src: gazebo, alt: "Gazebo Structure", category: "Features" },
  { src: rainwaterTank, alt: "Rainwater Tank & Bushfire Tank", category: "Infrastructure" },
  { src: groundSurfaces, alt: "Ground Surfaces - Granitic Sand & Timber Seats", category: "Infrastructure" },

  // References
  { src: bottleTree, alt: "Bottle Tree Reference", category: "Planting" },
  { src: italianPencilPine, alt: "Italian Pencil Pine", category: "Planting" },
  { src: groundCovers, alt: "Ground Covers - Foxtail Agave & Pigs Ears", category: "Planting" }
];

export const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-12 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-3 cursor-pointer hover:text-primary transition-colors duration-300 animate-fade-up">Image Gallery</h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-4" />
          <p className="text-lg text-muted-foreground">
            Explore the complete visual documentation of Area 1
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-sm text-primary-foreground/80 mb-1">{image.category}</p>
                  <p className="text-lg font-semibold text-primary-foreground">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-6xl p-0 bg-transparent border-none">
            <img
              src={selectedImage || ''}
              alt="Full size"
              className="w-full h-auto rounded-lg"
            />
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

import { Leaf, Layers, Users, Image as ImageIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import bottleTreeRef from "@/assets/Trees Bottle Tree.jfif";
import italianPencilPineRef from "@/assets/Italian Pencil Pine.jfif";
import groundCoversRef from "@/assets/Ground covers Foxtail Agave, Pigs Ears  Design by Sandara Passos and Veronica Bosque.jfif";

export const References = () => {
  return (
    <section className="py-12 px-6 bg-gradient-to-b from-secondary to-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">References</h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-8" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Planting palette and design specifications for the Dining Hall & Sports Complex
          </p>
        </div>

        {/* Reference Images Section */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="inline-flex p-3 rounded-lg bg-accent/10">
              <ImageIcon className="h-6 w-6 text-accent" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold">Visual References</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Bottle Tree Reference */}
            <Card className="border-border overflow-hidden group">
              <div className="relative h-56 overflow-hidden">
                <img
                  src={bottleTreeRef}
                  alt="Bottle Tree Reference"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-60" />
              </div>
              <CardHeader>
                <CardTitle>Bottle Tree (Brachychiton rupestris)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Distinctive drought-tolerant Australian native featuring a striking bottle-shaped trunk.
                  Provides excellent shade while requiring minimal water, perfectly suited to fire-resistant
                  landscaping. Its unique silhouette creates memorable visual landmarks throughout the dining
                  complex area.
                </p>
              </CardContent>
            </Card>

            {/* Italian Pencil Pine Reference */}
            <Card className="border-border overflow-hidden group">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={italianPencilPineRef}
                  alt="Italian Pencil Pine Reference"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-60" />
              </div>
              <CardHeader>
                <CardTitle>Italian Pencil Pine (Cupressus sempervirens)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Elegant columnar evergreen providing vertical accent elements and natural screening.
                  Fire-resistant with low flammability, these pines create formal definition along pathways
                  and building edges while maintaining bushfire safety standards. Their tall, narrow form
                  complements the winding path design.
                </p>
              </CardContent>
            </Card>

            {/* Ground Covers Reference */}
            <Card className="border-border overflow-hidden group md:col-span-2">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={groundCoversRef}
                  alt="Ground Covers - Foxtail Agave and Pigs Ears"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-60" />
              </div>
              <CardHeader>
                <CardTitle>Fire-Resistant Ground Covers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Low-maintenance succulent ground covers including Foxtail Agave (Agave attenuata) and
                  Pigs Ears (Cotyledon orbiculata) provide attractive, fire-resistant planting beds.
                  These drought-tolerant species thrive with minimal irrigation while creating textural
                  interest around seating areas and pathways. Their succulent nature provides natural
                  fire breaks in the landscape design.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Technical References Section */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">Technical Specifications</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-border">
              <CardHeader>
                <div className="mb-4 inline-flex p-3 rounded-lg bg-nature-green-light">
                  <Leaf className="h-6 w-6 text-nature-green" />
                </div>
                <CardTitle>Tree Planting References</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-muted-foreground italic">Brachychiton rupestris</p>
                <p className="text-sm text-muted-foreground">Bottle Tree - Drought tolerant feature tree</p>
                <p className="text-muted-foreground italic mt-4">Cupressus sempervirens</p>
                <p className="text-sm text-muted-foreground">Italian Pencil Pine - Fire-resistant screening</p>
                <p className="text-muted-foreground italic mt-4">Laurus nobilis</p>
                <p className="text-sm text-muted-foreground">Bay Laurel - Aromatic evergreen</p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <div className="mb-4 inline-flex p-3 rounded-lg bg-earth-brown-light">
                  <Layers className="h-6 w-6 text-earth-brown" />
                </div>
                <CardTitle>Ground Covers</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div>
                  <p className="font-semibold">Foxtail Agave</p>
                  <p className="text-sm text-muted-foreground">Agave attenuata - Soft succulent</p>
                </div>
                <div className="mt-4">
                  <p className="font-semibold">Pigs Ears</p>
                  <p className="text-sm text-muted-foreground">Cotyledon orbiculata - Fire-resistant</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <div className="mb-4 inline-flex p-3 rounded-lg bg-accent/10">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <CardTitle>Landscape Designers</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div>
                  <p className="font-semibold">Sandara Passos</p>
                  <p className="text-sm text-muted-foreground">Lead Designer</p>
                </div>
                <div className="mt-4">
                  <p className="font-semibold">Veronica Bosque</p>
                  <p className="text-sm text-muted-foreground">Landscape Architect</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

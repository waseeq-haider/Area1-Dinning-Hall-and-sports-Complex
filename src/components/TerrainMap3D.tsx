import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Mountain, Satellite, Eye, Map as MapIcon, Lock, Key } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

// Area markers data - adjust coordinates based on your actual location
const areaMarkers = [
  { id: 1, name: 'Dining & Events', coordinates: [-37.8136, 144.9631], color: '#EA7C3C' },
  { id: 2, name: 'Student Accommodation', coordinates: [-37.8146, 144.9621], color: '#3B82F6' },
  { id: 3, name: 'Adventure & Recreation', coordinates: [-37.8136, 144.9641], color: '#059669' },
  { id: 4, name: 'Eco Lodges', coordinates: [-37.8126, 144.9651], color: '#16A34A' },
  { id: 5, name: 'Wellness Center', coordinates: [-37.8116, 144.9641], color: '#14B8A6' },
  { id: 6, name: 'Nature Reserve', coordinates: [-37.8126, 144.9661], color: '#15803D' },
  { id: 7, name: 'Conference Center', coordinates: [-37.8146, 144.9631], color: '#7C3AED' }
];

export const TerrainMap3D = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapToken, setMapToken] = useState<string>('');
  const [tokenSaved, setTokenSaved] = useState<boolean>(false);
  const [viewMode, setViewMode] = useState<'satellite' | 'terrain'>('satellite');
  const { toast } = useToast();

  const initializeMap = (token: string) => {
    if (!mapContainer.current || map.current) return;

    try {
      mapboxgl.accessToken = token;
      
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: viewMode === 'satellite' 
          ? 'mapbox://styles/mapbox/satellite-streets-v12'
          : 'mapbox://styles/mapbox/outdoors-v12',
        center: [144.9641, -37.8136], // Adjust to your actual site location
        zoom: 15,
        pitch: 60,
        bearing: -17.6,
        antialias: true
      });

      // Add navigation controls
      map.current.addControl(
        new mapboxgl.NavigationControl({
          visualizePitch: true,
        }),
        'top-right'
      );

      // Add scale control
      map.current.addControl(
        new mapboxgl.ScaleControl({
          maxWidth: 100,
          unit: 'metric'
        }),
        'bottom-right'
      );

      // Add 3D terrain when map loads
      map.current.on('load', () => {
        if (!map.current) return;

        // Add 3D terrain source
        map.current.addSource('mapbox-dem', {
          type: 'raster-dem',
          url: 'mapbox://mapbox.mapbox-terrain-dem-v1',
          tileSize: 512,
          maxzoom: 14
        });

        // Add terrain layer
        map.current.setTerrain({ 
          source: 'mapbox-dem', 
          exaggeration: 1.5 
        });

        // Add sky layer
        map.current.addLayer({
          id: 'sky',
          type: 'sky',
          paint: {
            'sky-type': 'atmosphere',
            'sky-atmosphere-sun': [0.0, 90.0],
            'sky-atmosphere-sun-intensity': 15
          }
        });

        // Add 3D buildings
        const layers = map.current.getStyle().layers;
        const labelLayerId = layers?.find(
          (layer) => layer.type === 'symbol' && layer.layout?.['text-field']
        )?.id;

        map.current.addLayer(
          {
            id: '3d-buildings',
            source: 'composite',
            'source-layer': 'building',
            filter: ['==', 'extrude', 'true'],
            type: 'fill-extrusion',
            minzoom: 14,
            paint: {
              'fill-extrusion-color': '#aaa',
              'fill-extrusion-height': [
                'interpolate',
                ['linear'],
                ['zoom'],
                15,
                0,
                15.05,
                ['get', 'height']
              ],
              'fill-extrusion-base': [
                'interpolate',
                ['linear'],
                ['zoom'],
                15,
                0,
                15.05,
                ['get', 'min_height']
              ],
              'fill-extrusion-opacity': 0.6
            }
          },
          labelLayerId
        );

        // Add area markers
        areaMarkers.forEach(area => {
          // Create custom marker element
          const el = document.createElement('div');
          el.className = 'area-marker';
          el.style.cssText = `
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background: ${area.color};
            border: 3px solid white;
            box-shadow: 0 4px 12px rgba(0,0,0,0.3);
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: bold;
            font-size: 16px;
            transition: transform 0.2s;
          `;
          el.textContent = area.id.toString();
          el.style.transform = 'scale(1)';
          
          el.addEventListener('mouseenter', () => {
            el.style.transform = 'scale(1.2)';
          });
          
          el.addEventListener('mouseleave', () => {
            el.style.transform = 'scale(1)';
          });

          // Create popup
          const popup = new mapboxgl.Popup({ 
            offset: 25,
            closeButton: false
          }).setHTML(`
            <div style="padding: 8px;">
              <strong>Area ${area.id}</strong><br/>
              <span style="color: #666;">${area.name}</span>
            </div>
          `);

          // Add marker to map
          new mapboxgl.Marker(el)
            .setLngLat(area.coordinates as [number, number])
            .setPopup(popup)
            .addTo(map.current!);
        });

        toast({
          title: "3D Map Loaded",
          description: "Explore the terrain with satellite imagery and area markers",
        });
      });

      // Add rotation animation
      let isUserInteracting = false;
      
      map.current.on('mousedown', () => {
        isUserInteracting = true;
      });
      
      map.current.on('mouseup', () => {
        isUserInteracting = false;
      });

      // Smooth rotation effect when not interacting
      const rotateCamera = (timestamp: number) => {
        if (!map.current || isUserInteracting) return;
        map.current.rotateTo((timestamp / 200) % 360, { duration: 0 });
      };

      let animationId: number;
      const animate = (timestamp: number) => {
        rotateCamera(timestamp);
        animationId = requestAnimationFrame(animate);
      };

      // Uncomment to enable auto-rotation
      // animate(0);

      return () => {
        if (animationId) cancelAnimationFrame(animationId);
      };

    } catch (error) {
      toast({
        title: "Map Error",
        description: "Failed to initialize map. Please check your Mapbox token.",
        variant: "destructive"
      });
    }
  };

  const handleSaveToken = () => {
    if (!mapToken.trim()) {
      toast({
        title: "Token Required",
        description: "Please enter your Mapbox public token",
        variant: "destructive"
      });
      return;
    }

    setTokenSaved(true);
    initializeMap(mapToken);
    
    toast({
      title: "Token Saved",
      description: "Initializing 3D terrain map...",
    });
  };

  const switchViewMode = (mode: 'satellite' | 'terrain') => {
    setViewMode(mode);
    if (map.current) {
      map.current.setStyle(
        mode === 'satellite'
          ? 'mapbox://styles/mapbox/satellite-streets-v12'
          : 'mapbox://styles/mapbox/outdoors-v12'
      );
    }
  };

  useEffect(() => {
    return () => {
      map.current?.remove();
    };
  }, []);

  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">3D Terrain Map</h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-8" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore the site in stunning 3D with real topography and satellite imagery
          </p>
        </div>

        {!tokenSaved ? (
          <Card className="max-w-2xl mx-auto border-2 border-accent/30 animate-fade-in">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-3 rounded-lg bg-accent/10">
                  <Key className="h-6 w-6 text-accent" />
                </div>
                <CardTitle>Mapbox Configuration</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-muted p-4 rounded-lg space-y-2">
                <div className="flex items-start gap-2">
                  <Lock className="h-4 w-4 text-muted-foreground mt-0.5" />
                  <div className="text-sm text-muted-foreground">
                    <p className="font-medium mb-1">Get your free Mapbox token:</p>
                    <ol className="list-decimal list-inside space-y-1 ml-2">
                      <li>Visit <a href="https://mapbox.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">mapbox.com</a></li>
                      <li>Create a free account</li>
                      <li>Find your public token in the dashboard</li>
                    </ol>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Mapbox Public Token</label>
                <Input
                  type="password"
                  placeholder="pk.eyJ1IjoiZXhhbXBsZSIsImEiOiJjbGV4YW1wbGUifQ..."
                  value={mapToken}
                  onChange={(e) => setMapToken(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSaveToken()}
                />
              </div>

              <Button onClick={handleSaveToken} className="w-full" size="lg">
                <MapIcon className="mr-2 h-4 w-4" />
                Initialize 3D Map
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-6">
            {/* Controls */}
            <div className="flex justify-center gap-4">
              <Button
                variant={viewMode === 'satellite' ? 'default' : 'outline'}
                onClick={() => switchViewMode('satellite')}
              >
                <Satellite className="mr-2 h-4 w-4" />
                Satellite View
              </Button>
              <Button
                variant={viewMode === 'terrain' ? 'default' : 'outline'}
                onClick={() => switchViewMode('terrain')}
              >
                <Mountain className="mr-2 h-4 w-4" />
                Terrain View
              </Button>
            </div>

            {/* Map Container */}
            <Card className="overflow-hidden border-2 border-border">
              <CardContent className="p-0">
                <div 
                  ref={mapContainer} 
                  className="w-full h-[700px] relative"
                  style={{ background: '#1a1a1a' }}
                />
                
                {/* Legend Overlay */}
                <div className="absolute bottom-20 left-4 bg-background/95 backdrop-blur rounded-lg p-4 shadow-lg max-w-xs">
                  <h4 className="text-sm font-semibold mb-3 flex items-center gap-2">
                    <Eye className="h-4 w-4" />
                    Area Locations
                  </h4>
                  <div className="space-y-2">
                    {areaMarkers.slice(0, 4).map(area => (
                      <div key={area.id} className="flex items-center gap-2 text-xs">
                        <div 
                          className="w-4 h-4 rounded-full border-2 border-white shadow"
                          style={{ backgroundColor: area.color }}
                        />
                        <span>Area {area.id}: {area.name}</span>
                      </div>
                    ))}
                    <p className="text-xs text-muted-foreground mt-2">
                      Click markers for details • Drag to rotate • Scroll to zoom
                    </p>
                  </div>
                </div>

                {/* View Mode Badge */}
                <div className="absolute top-4 left-4">
                  <Badge className="text-xs">
                    {viewMode === 'satellite' ? (
                      <><Satellite className="mr-1 h-3 w-3" /> Satellite</>
                    ) : (
                      <><Mountain className="mr-1 h-3 w-3" /> Terrain</>
                    )}
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Info Cards */}
            <div className="grid md:grid-cols-3 gap-4">
              <Card>
                <CardContent className="p-4 text-center">
                  <Mountain className="h-8 w-8 text-accent mx-auto mb-2" />
                  <h4 className="font-semibold mb-1">3D Terrain</h4>
                  <p className="text-xs text-muted-foreground">
                    Real elevation data with 1.5x exaggeration
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <Satellite className="h-8 w-8 text-accent mx-auto mb-2" />
                  <h4 className="font-semibold mb-1">Satellite Imagery</h4>
                  <p className="text-xs text-muted-foreground">
                    High-resolution aerial photography
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <MapIcon className="h-8 w-8 text-accent mx-auto mb-2" />
                  <h4 className="font-semibold mb-1">Interactive</h4>
                  <p className="text-xs text-muted-foreground">
                    Explore all 7 areas with markers
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

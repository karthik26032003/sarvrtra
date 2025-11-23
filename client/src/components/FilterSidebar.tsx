import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface FilterOption {
  id: string;
  label: string;
  count?: number;
}

interface FilterSidebarProps {
  onFilterChange?: (filters: any) => void;
}

export default function FilterSidebar({ onFilterChange }: FilterSidebarProps) {
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string[]>>({
    material: [],
    room: [],
    type: [],
    style: [],
  });
  const [priceRange, setPriceRange] = useState([0, 50000]);

  const filters = {
    material: [
      { id: "brass", label: "Brass", count: 45 },
      { id: "bronze", label: "Bronze", count: 32 },
      { id: "wood", label: "Wood", count: 28 },
      { id: "mixed", label: "Mixed Materials", count: 18 },
    ],
    room: [
      { id: "living", label: "Living Room", count: 35 },
      { id: "bedroom", label: "Bedroom", count: 22 },
      { id: "pooja", label: "Pooja Room", count: 40 },
      { id: "dining", label: "Dining", count: 15 },
      { id: "kitchen", label: "Kitchen", count: 12 },
    ],
    type: [
      { id: "wall-art", label: "Wall Art", count: 25 },
      { id: "sculptures", label: "Sculptures", count: 30 },
      { id: "furniture", label: "Furniture", count: 18 },
      { id: "lighting", label: "Lighting", count: 20 },
      { id: "idols", label: "Idols", count: 35 },
      { id: "decor", label: "Décor Items", count: 40 },
    ],
    style: [
      { id: "traditional", label: "Traditional", count: 50 },
      { id: "modern", label: "Modern", count: 30 },
      { id: "rustic", label: "Rustic", count: 25 },
      { id: "elegant", label: "Elegant", count: 35 },
    ],
  };

  const toggleFilter = (category: string, value: string) => {
    setSelectedFilters((prev) => {
      const current = prev[category] || [];
      const updated = current.includes(value)
        ? current.filter((v) => v !== value)
        : [...current, value];
      
      const newFilters = { ...prev, [category]: updated };
      onFilterChange?.(newFilters);
      return newFilters;
    });
  };

  const clearAllFilters = () => {
    setSelectedFilters({ material: [], room: [], type: [], style: [] });
    setPriceRange([0, 50000]);
    onFilterChange?.({});
  };

  const activeFilterCount = Object.values(selectedFilters).flat().length;

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-serif text-xl font-semibold">Filters</h2>
        {activeFilterCount > 0 && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearAllFilters}
            data-testid="button-clear-filters"
          >
            Clear All
          </Button>
        )}
      </div>

      {activeFilterCount > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {Object.entries(selectedFilters).map(([category, values]) =>
            values.map((value) => (
              <Badge
                key={`${category}-${value}`}
                variant="secondary"
                className="gap-1"
                data-testid={`badge-filter-${category}-${value}`}
              >
                {value}
                <X
                  className="h-3 w-3 cursor-pointer"
                  onClick={() => toggleFilter(category, value)}
                />
              </Badge>
            ))
          )}
        </div>
      )}

      <Accordion type="multiple" defaultValue={["material", "price"]} className="w-full">
        <AccordionItem value="material">
          <AccordionTrigger data-testid="accordion-material">Material</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-3">
              {filters.material.map((option) => (
                <div key={option.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={`material-${option.id}`}
                    checked={selectedFilters.material?.includes(option.id)}
                    onCheckedChange={() => toggleFilter("material", option.id)}
                    data-testid={`checkbox-material-${option.id}`}
                  />
                  <Label
                    htmlFor={`material-${option.id}`}
                    className="text-sm font-normal cursor-pointer flex-1"
                  >
                    {option.label}
                  </Label>
                  <span className="text-xs text-muted-foreground">{option.count}</span>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="price">
          <AccordionTrigger data-testid="accordion-price">Price Range</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <Slider
                value={priceRange}
                onValueChange={setPriceRange}
                max={50000}
                step={500}
                className="w-full"
                data-testid="slider-price"
              />
              <div className="flex items-center justify-between text-sm">
                <span data-testid="text-price-min">₹{priceRange[0].toLocaleString()}</span>
                <span data-testid="text-price-max">₹{priceRange[1].toLocaleString()}</span>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="room">
          <AccordionTrigger data-testid="accordion-room">Room</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-3">
              {filters.room.map((option) => (
                <div key={option.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={`room-${option.id}`}
                    checked={selectedFilters.room?.includes(option.id)}
                    onCheckedChange={() => toggleFilter("room", option.id)}
                    data-testid={`checkbox-room-${option.id}`}
                  />
                  <Label
                    htmlFor={`room-${option.id}`}
                    className="text-sm font-normal cursor-pointer flex-1"
                  >
                    {option.label}
                  </Label>
                  <span className="text-xs text-muted-foreground">{option.count}</span>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="type">
          <AccordionTrigger data-testid="accordion-type">Product Type</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-3">
              {filters.type.map((option) => (
                <div key={option.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={`type-${option.id}`}
                    checked={selectedFilters.type?.includes(option.id)}
                    onCheckedChange={() => toggleFilter("type", option.id)}
                    data-testid={`checkbox-type-${option.id}`}
                  />
                  <Label
                    htmlFor={`type-${option.id}`}
                    className="text-sm font-normal cursor-pointer flex-1"
                  >
                    {option.label}
                  </Label>
                  <span className="text-xs text-muted-foreground">{option.count}</span>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="style">
          <AccordionTrigger data-testid="accordion-style">Style</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-3">
              {filters.style.map((option) => (
                <div key={option.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={`style-${option.id}`}
                    checked={selectedFilters.style?.includes(option.id)}
                    onCheckedChange={() => toggleFilter("style", option.id)}
                    data-testid={`checkbox-style-${option.id}`}
                  />
                  <Label
                    htmlFor={`style-${option.id}`}
                    className="text-sm font-normal cursor-pointer flex-1"
                  >
                    {option.label}
                  </Label>
                  <span className="text-xs text-muted-foreground">{option.count}</span>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

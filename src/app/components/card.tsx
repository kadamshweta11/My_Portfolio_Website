import { Card, CardHeader, CardBody, Image } from "@heroui/react";

interface ProjectCardProps {
  title: string;
  description: string;
  link?: string;
  imageUrl?: string;
}

export default function ProjectCard({
  title,
  description,
  link,
  imageUrl = "https://heroui.com/images/hero-card-complete.jpeg",
}: ProjectCardProps) {
  return (
    <Card className="border-2 border-gray-700 hover:border-purple-500 transition-all duration-300 overflow-hidden h-full flex flex-col">
      {/* Header Section with Fixed Height */}
      <div className="min-h-[80px] px-4 pt-4 pb-2 flex flex-col justify-center">
        <h4 className="font-bold text-lg text-white line-clamp-2" title={title}>
          {title}
        </h4>
      </div>

      {/* Fixed Aspect Ratio Image Container */}
      <div className="aspect-video w-full overflow-hidden flex-shrink-0">
        <a href={link} target="_blank" rel="noopener noreferrer" className="block h-full">
          <Image
            alt={title}
            className="object-cover w-full h-full"
            src={imageUrl}
          />
        </a>
      </div>

      {/* Description Section with Fixed Height */}
      <div className="p-4 flex-grow min-h-[120px]">
        <div className="h-full overflow-y-auto">
          {description.split('\n').map((item, index) => (
            <p key={index} className="text-sm text-gray-300 mb-1 last:mb-0">
              {item.replace(/^- /, '').trim()}
            </p>
          ))}
        </div>
      </div>
    </Card>
  );
}
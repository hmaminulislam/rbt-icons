"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import {
  BellRing,
  Sun,
  Facebook,
  House,
  User,
  Search,
  Envelope,
  Instagram,
  Phone,
  Whatsapp,
  Check,
  Map,
  Settings,
  ShoppingCart,
  Users,
  Calendar,
  Sliders,
  Plus,
  Document,
  Bookmark,
  Lock,
  Info,
  Graduation,
  Eye,
  Bulb,
  Briefcase,
  World,
  ListCheck,
  ShoppingBag,
  Play,
  List,
  ChartColumn,
  Bank,
  PaperPlane,
  Rocket,
  ShieldCheck,
  Folder,
  Filter,
  VideoCamera,
  Minus,
  AngleLeft,
  AngleRight,
  Gym,
  Bullseye,
  TimeQuaterPast,
  SortUp,
  Flag,
  SidebarFlip,
  Sidebar,
  Cubes,
  SignalStream,
  TriangleWarning,
  CommentDots,
  CircleUser,
  MicroChip,
  Star,
  Picture,
  Cross,
  RotateRight,
} from "rbt-icons";
import { Slider } from "../ui/SizeSlider";
import { useSlider } from "@/context/SliderContext";
import { SketchPicker } from "react-color";
import { useEffect, useRef, useState } from "react";

const IconResult = () => {
  const { value, setValue } = useSlider();
  const [color, setColor] = useState("#000000");
  const [open, setOpen] = useState(false);
  const pickerRef = useRef<HTMLDivElement>(null);

  // outside click color picker remove
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        pickerRef.current &&
        !pickerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  const resetSizeColor = () => {
    setColor("#000000");
    setValue([50]);
  };

  return (
    <div className="py-10">
      <div className="container px-4 mx-auto">
        <div className="max-w-250 mx-auto flex flex-wrap gap-3">
          {iconsData.map((item, idx) => (
            <div key={idx}>
              <Dialog>
                <DialogTrigger className="w-12 h-12 flex items-center justify-center bg-primary-50 rounded-sm text-lg cursor-pointer">
                  {item.icon}
                </DialogTrigger>
                <DialogContent className="border border-primary-50 min-w-[700px] p-14">
                  <DialogHeader>
                    <DialogTitle className="mb-2">Usage</DialogTitle>
                  </DialogHeader>
                  <pre className="bg-primary-50/50 p-4">
                    <code>{item.import}</code>
                  </pre>
                  <pre className="bg-primary-50/50 p-4">
                    <code>{item.callIcon}</code>
                  </pre>
                  <div className="flex gap-x-12 mt-8">
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-x-4 mb-4">
                        <h6 className="text-lg font-semibold">Customizer</h6>
                        <button
                          onClick={resetSizeColor}
                          className="cursor-pointer"
                        >
                          <RotateRight />
                        </button>
                      </div>
                      <div className="flex items-center justify-between gap-x-4 mb-3">
                        <span className="font-semibold">Size</span>
                        <span className="font-semibold">{value}</span>
                      </div>
                      <Slider />
                      <div className="mt-3">
                        <span className="font-semibold block mb-1">Color</span>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => setOpen(true)}
                            className="w-5 h-5 rounded-full cursor-pointer"
                            style={{ background: color }}
                          ></button>
                          <span>Current Color</span>
                        </div>
                      </div>
                      {open && (
                        <div ref={pickerRef} className="absolute">
                          <SketchPicker
                            color={color}
                            onChange={(newColor) => setColor(newColor.hex)}
                          />
                        </div>
                      )}
                    </div>
                    <div
                      className={`w-60 h-60 flex items-center justify-center bg-primary-50/40 text-[${value}]`}
                      style={{ fontSize: `${value}px`, color: color }}
                    >
                      {item.icon}
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IconResult;

const iconsData = [
  {
    import: `import { BellRing } from "rbt-icons";`,
    callIcon: `<BellRing />`,
    icon: <BellRing />,
  },
  {
    import: `import { Sun } from "rbt-icons";`,
    callIcon: `<Sun />`,
    icon: <Sun />,
  },
  {
    import: `import { Facebook } from "rbt-icons";`,
    callIcon: `<Facebook />`,
    icon: <Facebook />,
  },
  {
    import: `import { House } from "rbt-icons";`,
    callIcon: `<House />`,
    icon: <House />,
  },
  {
    import: `import { User } from "rbt-icons";`,
    callIcon: `<User />`,
    icon: <User />,
  },
  {
    import: `import { Search } from "rbt-icons";`,
    callIcon: `<Search />`,
    icon: <Search />,
  },
  {
    import: `import { Envelope } from "rbt-icons";`,
    callIcon: `<Envelope />`,
    icon: <Envelope />,
  },
  {
    import: `import { Instagram } from "rbt-icons";`,
    callIcon: `<Instagram />`,
    icon: <Instagram />,
  },
  {
    import: `import { Phone } from "rbt-icons";`,
    callIcon: `<Phone />`,
    icon: <Phone />,
  },
  {
    import: `import { Whatsapp } from "rbt-icons";`,
    callIcon: `<Whatsapp />`,
    icon: <Whatsapp />,
  },
  {
    import: `import { Check } from "rbt-icons";`,
    callIcon: `<Check />`,
    icon: <Check />,
  },
  {
    import: `import { Map } from "rbt-icons";`,
    callIcon: `<Map />`,
    icon: <Map />,
  },
  {
    import: `import { Settings } from "rbt-icons";`,
    callIcon: `<Settings />`,
    icon: <Settings />,
  },
  {
    import: `import { ShoppingCart } from "rbt-icons";`,
    callIcon: `<ShoppingCart />`,
    icon: <ShoppingCart />,
  },
  {
    import: `import { Users } from "rbt-icons";`,
    callIcon: `<Users />`,
    icon: <Users />,
  },
  {
    import: `import { Calendar } from "rbt-icons";`,
    callIcon: `<Calendar />`,
    icon: <Calendar />,
  },
  {
    import: `import { Sliders } from "rbt-icons";`,
    callIcon: `<Sliders />`,
    icon: <Sliders />,
  },
  {
    import: `import { Plus } from "rbt-icons";`,
    callIcon: `<Plus />`,
    icon: <Plus />,
  },
  {
    import: `import { Document } from "rbt-icons";`,
    callIcon: `<Document />`,
    icon: <Document />,
  },
  {
    import: `import { Bookmark } from "rbt-icons";`,
    callIcon: `<Bookmark />`,
    icon: <Bookmark />,
  },
  {
    import: `import { Lock } from "rbt-icons";`,
    callIcon: `<Lock />`,
    icon: <Lock />,
  },
  {
    import: `import { Info } from "rbt-icons";`,
    callIcon: `<Info />`,
    icon: <Info />,
  },
  {
    import: `import { Graduation } from "rbt-icons";`,
    callIcon: `<Graduation />`,
    icon: <Graduation />,
  },
  {
    import: `import { Eye } from "rbt-icons";`,
    callIcon: `<Eye />`,
    icon: <Eye />,
  },
  {
    import: `import { Bulb } from "rbt-icons";`,
    callIcon: `<Bulb />`,
    icon: <Bulb />,
  },
  {
    import: `import { Briefcase } from "rbt-icons";`,
    callIcon: `<Briefcase />`,
    icon: <Briefcase />,
  },
  {
    import: `import { World } from "rbt-icons";`,
    callIcon: `<World />`,
    icon: <World />,
  },
  {
    import: `import { ListCheck } from "rbt-icons";`,
    callIcon: `<ListCheck />`,
    icon: <ListCheck />,
  },
  {
    import: `import { ShoppingBag } from "rbt-icons";`,
    callIcon: `<ShoppingBag />`,
    icon: <ShoppingBag />,
  },
  {
    import: `import { Play } from "rbt-icons";`,
    callIcon: `<Play />`,
    icon: <Play />,
  },
  {
    import: `import { List } from "rbt-icons";`,
    callIcon: `<List />`,
    icon: <List />,
  },
  {
    import: `import { ChartColumn } from "rbt-icons";`,
    callIcon: `<ChartColumn />`,
    icon: <ChartColumn />,
  },
  {
    import: `import { Bank } from "rbt-icons";`,
    callIcon: `<Bank />`,
    icon: <Bank />,
  },
  {
    import: `import { PaperPlane } from "rbt-icons";`,
    callIcon: `<PaperPlane />`,
    icon: <PaperPlane />,
  },
  {
    import: `import { Rocket } from "rbt-icons";`,
    callIcon: `<Rocket />`,
    icon: <Rocket />,
  },
  {
    import: `import { ShieldCheck } from "rbt-icons";`,
    callIcon: `<ShieldCheck />`,
    icon: <ShieldCheck />,
  },
  {
    import: `import { Folder } from "rbt-icons";`,
    callIcon: `<Folder />`,
    icon: <Folder />,
  },
  {
    import: `import { Filter } from "rbt-icons";`,
    callIcon: `<Filter />`,
    icon: <Filter />,
  },
  {
    import: `import { VideoCamera } from "rbt-icons";`,
    callIcon: `<VideoCamera />`,
    icon: <VideoCamera />,
  },
  {
    import: `import { Minus } from "rbt-icons";`,
    callIcon: `<Minus />`,
    icon: <Minus />,
  },
  {
    import: `import { AngleLeft } from "rbt-icons";`,
    callIcon: `<AngleLeft />`,
    icon: <AngleLeft />,
  },
  {
    import: `import { AngleRight } from "rbt-icons";`,
    callIcon: `<AngleRight />`,
    icon: <AngleRight />,
  },
  {
    import: `import { Gym } from "rbt-icons";`,
    callIcon: `<Gym />`,
    icon: <Gym />,
  },
  {
    import: `import { Bullseye } from "rbt-icons";`,
    callIcon: `<Bullseye />`,
    icon: <Bullseye />,
  },
  {
    import: `import { TimeQuaterPast } from "rbt-icons";`,
    callIcon: `<TimeQuaterPast />`,
    icon: <TimeQuaterPast />,
  },
  {
    import: `import { SortUp } from "rbt-icons";`,
    callIcon: `<SortUp />`,
    icon: <SortUp />,
  },
  {
    import: `import { Flag } from "rbt-icons";`,
    callIcon: `<Flag />`,
    icon: <Flag />,
  },
  {
    import: `import { SidebarFlip } from "rbt-icons";`,
    callIcon: `<SidebarFlip />`,
    icon: <SidebarFlip />,
  },
  {
    import: `import { Sidebar } from "rbt-icons";`,
    callIcon: `<Sidebar />`,
    icon: <Sidebar />,
  },
  {
    import: `import { Cubes } from "rbt-icons";`,
    callIcon: `<Cubes />`,
    icon: <Cubes />,
  },
  {
    import: `import { SignalStream } from "rbt-icons";`,
    callIcon: `<SignalStream />`,
    icon: <SignalStream />,
  },
  {
    import: `import { TriangleWarning } from "rbt-icons";`,
    callIcon: `<TriangleWarning />`,
    icon: <TriangleWarning />,
  },
  {
    import: `import { CommentDots } from "rbt-icons";`,
    callIcon: `<CommentDots />`,
    icon: <CommentDots />,
  },
  {
    import: `import { CircleUser } from "rbt-icons";`,
    callIcon: `<CircleUser />`,
    icon: <CircleUser />,
  },
  {
    import: `import { MicroChip } from "rbt-icons";`,
    callIcon: `<MicroChip />`,
    icon: <MicroChip />,
  },
  {
    import: `import { Star } from "rbt-icons";`,
    callIcon: `<Star />`,
    icon: <Star />,
  },
  {
    import: `import { Picture } from "rbt-icons";`,
    callIcon: `<Picture />`,
    icon: <Picture />,
  },
  {
    import: `import { Cross } from "rbt-icons";`,
    callIcon: `<Cross />`,
    icon: <Cross />,
  },
];

import { Gavel, Gem, UserRoundPen } from "lucide-react";
import ArtWork from "../components/ArtWork";
import Empty from "../components/Empty";
import { useGlobalState } from "../store";
import { title } from "process";
const Collections = () => {
  const [collections] = useGlobalState("collections");
  const [auctions] = useGlobalState("auctions");

  return (
    <div className="w-4/5 mx-auto mt-11">{collections.length > 0 ? <ArtWork auctions={auctions} title={title} /> : <Empty />}</div>
  );
};

export default Collections;

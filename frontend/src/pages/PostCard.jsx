import { useState } from "react";
import Colors from "../components/CardGeneration/Colors";
import CardGeneration from "../components/CardGeneration/CardGeneration";
import Fonts from "../components/CardGeneration/Fonts";

function PostCard() {
  const [savedColor, setSavedColor] = useState("white");
  const [savedFontColor, setSavedFontColor] = useState("#fffff");
  const [savedFont, setSavedFont] = useState("");
  const [savedSize, setSavedSize] = useState(35);

  return (
    <>
      <Colors
        savedColor={savedColor}
        setSavedColor={setSavedColor}
        savedFontColor={savedFontColor}
        setSavedFontColor={setSavedFontColor}
      />
      <Fonts
        savedFont={savedFont}
        setSavedFont={setSavedFont}
        savedSize={savedSize}
        setSavedSize={setSavedSize}
      />
      <CardGeneration
        savedColor={savedColor}
        savedFontColor={savedFontColor}
        savedFont={savedFont}
        savedSize={savedSize}
      />
    </>
  );
}

export default PostCard;

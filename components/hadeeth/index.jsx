import { useState, useEffect } from "react";

const hadeeths = [
  "“Whoever takes a path upon which to obtain knowledge, Allah makes the path to Paradise easy for him.” - Jami` at-Tirmidhi 2646",
  "“Who goes goes seeking knowledge, then he is in Allah’s cause until he returns.” - Jami` at-Tirmidhi 2647",
  "“When a person dies, his deeds are cut off except for three: Continuing charity, knowledge that others benefited from, and a righteous son who supplicates for him.” - Jami` at-Tirmidhi 1376",
  "“One Faqih (knowledgeable man) is more formidable against the Shaitan than one thousand devoted worshipers.” - Sunan Ibn Majah, Vol. 1, Book 1, Hadith 222",
];

let startIndex = 0;
function Hadeeth(props) {
  const [active, setActive] = useState(startIndex);
  useEffect(() => {
    setInterval(() => {
      if (startIndex >= hadeeths.length - 1) {
        startIndex = 0;
      } else {
        startIndex = startIndex + 1;
      }
      setActive(startIndex);
    }, props.delay || 8000);
  }, []);

  return (
    <div>
      <div className="font-bold text-base text-gray-600">
        the Messenger of Allah (ﷺ) said:
      </div>
      <div className="text-base text-gray-700">{hadeeths[active]}</div>
    </div>
  );
}

export default Hadeeth;

# chickblood

## Custom Hooks
Custom hooks are created to better manage global states. Below are documentations on how to use them in future development.

### Theming & Coloring
#### useColorPalette hook 
Mananges colors appear in this project. It is defined in ```chickblood-test/src/hooks/useColorPalette.js```
To use it:
```
import useColorPalette from ".../hooks/useColorPalette";

export default function Example() {
  const colorPalette = useColorPalette();
  return <button
        style={{
          color: colorPalette.black,
          backgroundColor: corlorPalette.pear,
        }}>
      </button>
}
```
Currently colors are defined as: 
```
{
    skyBlue: "#82CFEF",
    pear: "#DCDC22",
    egyptianBlue: "#013994",
    white: "#FFFFFF",
    black: "#000000",
}
```

#### ThemeProvider
ThemeProvider specifically helps managing the **light/dark mode** of the app. It uses ```useContext/useState/useMemo/useEffect``` hooks to store the current light/dark setting in localStorage. The injection point is wrapped by <ThemeProvider></ThemeProvider> so that this set up is applied globally. ThemeProvider.js can be found at ```chickblood-test/src/context/ThemeProvider.js```.

The color setting of two modes are as defined in the file. It is worth mention that currently the **background and text color** are naively defined as: 
```
**light**
palette:{
  mode: "light",
  background: {
      default: "#FFFFFF",    //pure white
      paper: "#FFFFFF",      //pure white
    },
  text: {
      primary: "#000000",    //pure black
      secondary: "#000000",  //pure black
    },
}
**dark**
palette:{
  mode: "dark",
  background: {
      default: "#222222",    //lighter black
      paper: "#222222",      //lighter black
    },
  text: {
      primary: "#FFFFFF",    //pure white
      secondary: "#FFFFFF",  //pure white
    },
}
```
##### Accessing current light/dark theme
```
import { ThemeContext } from "../../../context/ThemeProvider";
...
const { themeMode } = useContext(ThemeContext);
console.log(themeMode);
```

### Language, Typography & Font
#### Language (i18next)
Our app uses i18next for internalization. (Almomst) all settings are located at ```chickblood-test/src/translation``` folder.
##### i18n.js
i18n.js contains the initializer for i18n. 
1. ```debug``` is set to **true** during production, the framework logs detailed debugging info to console when settings are changed.
2. ```react.useSuspense``` is set to false. If future production adds the use of <Suspense></Suspense>, setting it to **true** will support fallbacks on loading behaviors.
3. Resources for each language are provided (en, chn, krn, jpn), each maps to the translation objects located in ```translation``` folder. The default fallback language is english.
4. ```LanguageDetector``` option is used to detect user's langauge environment and will set default language correspondingly.

To use it:
```
import { useTranslation } from 'react-i18next';

function Example() {
  const { t } = useTranslation();
  return <p>{t('key')}</p>;
}
```
Note that 'key' here refer to a key-value pair that exists in the translation filde.

Accessing current language:
```console.log(i18n.language)```

Changing language:
```
function switchLanguage(languageCode) {
  i18n.changeLanguage(languageCode);
}
```
#### Typography & Font
##### useFontFamily hook
useFontFamily hook is created to better mangage the **font family** used for each langauge. useFontFamily.js is located at ```chickblood-test/src/hooks/useFontFamily.js```.

Currently four languages are in use and each are bundled with a **light** and **bold** font family. The fonts used are:
|       | en               | chn       | jpn                    | krn                   |
| ----- | ---------------- | --------- | ---------------------- | --------------------- |
| light | xsong(monospace) | xsong     | Hiragiro-Mincho-Pro-W3 | Pretendard-ExtraLight |
| bold  | CHeiHK-UltraBold | DHeiFanTi | Hiragiro-Mincho-Pro-W6 | Pretendard-ExtraBold  |

To use it:
```
import useFontFamily from "../hooks/useFontFamily";

export default function Example(){
    const useFont = useFontFamily();
    return <Typography
      sx={{
        fontFamily: useFont.bold,
      }}></Typography>
}
```

## Media Content (Images, Videos, and More)
### Images
All image contents are delivered through cloudfare CDN.
#### Image Preload
To display loading page upon image loading, we can use this preload prcedure:
```
const imageUrls = [
  "image url here",
];

const Example = () => {
  /** Loader states and handle image preload */
  const handleCloseLoader = () => {
    setOpenLoader(false);
  };
  const handleOpenLoader = () => {
    setOpenLoader(true);
  };
  const loadImage = (src) => {
    console.log("Image loading.");
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = src;
      img.onload = resolve;
      img.onerror = reject;
    });
  };
  useEffect(() => {
    const preloadImages = async () => {
      try {
        await Promise.all(imageUrls.map((url) => loadImage(url)));

        setOpenLoader(false);
      } catch (error) {
        console.error("Error loading images:", error);
      }
    };

    preloadImages();
  }, []);

  return (
    <div>
      <LoadingPage
        openLoader={openLoader}
        handleClose={handleCloseLoader}
      ></LoadingPage>
      // Rest of the page goes here. Use the image url in image components.
    </div>
  )
}
```



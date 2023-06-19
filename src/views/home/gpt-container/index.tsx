import React, { useState } from "react";
import {
  GPTContianer,
  VersionContainer,
  VersionBtns,
  SeoContainer,
  SeoHeader,
  SeoContent,
  SeoBtns,
  CreateButton,
  Usage,
  RealTimeBtns
} from "./styles";
import ReactMarkdown from 'react-markdown'
import CustomForm from "@/component/CustomInput";
import CustomSwtich from "@/component/CustomSwtich";
import { useRouter } from 'next/router'

import { ArticleType, ToneVoice, Country, Language, PointView } from "../data";
import { UrlObject } from "url";

type SetRealTime = React.Dispatch<React.SetStateAction<boolean>>;
type SetTargetKeyword = React.Dispatch<React.SetStateAction<string>>;

const GPTSetting: React.FC = () => {
  const router = useRouter()

  const [version, setVersion] = useState<boolean>(true); // if true, 3.5, if not, 4.0 version of GPT
  const [seo, setSEO] = useState<number>(1); // 1 = default, 2 = manual, 3 = ai
  const [articleType, setArticleType] = useState<string>(`Blog Post`);
  const [isRealTime, setRealTime]: [boolean, SetRealTime] = useState(false); 
  const [realtime, setRealTimeBtn] = useState(1);
  const [lang, setLanguage] = useState<string>(`English`);
  const [toneVoice, setToneVoice] = useState<string>(`seo_optimized`);
  const [country, setCountry] = useState<string>(`United States`);
  const [targetKeyword, setTargetKeyword]: [string, SetTargetKeyword] = useState('can you eat watermelon seeds?');
  const [pointView, setPointView] = useState(`First Person Singular (I, me, my, mine)`);
  const [isFAQ, setFAQ] = useState<boolean>(false);
  

  const generateAnswer = async () => {
    let prompt = `This is the article keyword => ${targetKeyword}.Please make some Blog post with this keyword as a title in ${lang} with Markdown.the point of view is ${pointView}.Please include one more relation sentence with this keyword in title.Make everything related to this keyword into a subtitle. Then according to subtitle, Please make it as specific as possible and as long as possible.${isFAQ && `Please add FAQ section in content more detail.`}Please make it more than 500 sentences!`;
    
    localStorage.setItem('prompt', prompt);
    router.push(`/answer`);
  }

  return (
    <GPTContianer>
        <VersionContainer>
          <p>GPT Version</p>
          <span>GPT-4 is only available to paid users. It can result in much higher quality and unique articles.</span>
          <VersionBtns version={version}>
            <button>GPT-3.5</button>
            <button>GPT-4</button>
          </VersionBtns>
        </VersionContainer>
        <CustomForm label='Article Type' options={ArticleType} value={articleType} event={setArticleType}/>
        <CustomForm 
          label="Target Keyword" 
          value={targetKeyword}
          isInput={true} 
          event={setTargetKeyword}
          subText="What is the target keyword or article topic that you want to rank for?"
        />
        <SeoContainer>
          <SeoHeader>
            <p>SEO Optimization</p>
            <span>New!</span>
          </SeoHeader>
          <SeoContent>
            <p>
              <b>Manual</b>: Specify a list of keywords to be used in the article. (Beta)
            </p>
            <p>
              <b>🧙 AI-Powered</b>: We will analyze top ranking pages and extract up to 100 topically relevant keywords and entities to use in the article. This results in a much more comprehensive article that has a better chance of ranking. (Beta)
            </p>
            <p>
              AI-Powered SEO Optimization is only available for paid accounts because it requires analyzing dozens of pages for every article. <b>To see the full power of KoalaWriter we highly recommend that you try it out along with GPT-4.</b>
            </p>
          </SeoContent>
          <SeoBtns seo={seo}>
            <button onClick={() => setSEO(1)}>DEFAULT</button>
            <button onClick={() => setSEO(2)}>MANUAL</button>
            <button>AI-POWERED</button>
          </SeoBtns>
        </SeoContainer>

        {
          seo === 2 && 
          <CustomForm 
            label='Related Keywords / Entities / Topics' 
            isInput={true} 
            subText="Use this field to list any keywords, entities, or topics that you want the article to cover. We will automatically try to assign them to their semantically relevant section and naturally use them in the article. Separate with commas or new lines."
          />
        }
        <CustomForm 
          label='Tone of Voice' 
          options={ToneVoice} 
          value={toneVoice}
          event={setToneVoice}
        />
        <CustomForm 
          label='Language'
          value={lang}
          event={setLanguage}
          options={Language} 
        />
        <CustomForm 
          label='Country' 
          options={Country} 
          value={country}
          event={setCountry}
          subText="Choose the primary country you want to rank for. This option will help localize the results we use for Real-Time Data, SEO Optimization, and FAQ. You should also put the Target Keyword in the appropriate language."
        />
        <CustomForm 
          label='Point of View' 
          options={PointView} 
          value={pointView}
          event={setPointView}
        />
        <CustomSwtich 
          title='Use Real-Time Search Results' 
          event={setRealTime} 
          value={isRealTime} 
          text='If enabled, we will fetch search results for each section and use that data to help generate the article.'
        />
        {
          isRealTime && 
          <>
            <SeoContainer>
              <SeoHeader>
                <p>Real-Time Source Filtering</p>
                <span>New!</span>
              </SeoHeader>
              <SeoContent>
                <p>
                  Please see <b>the documentation</b> to learn more about this powerful feature.
                </p>
                <p />
              </SeoContent> 
              <RealTimeBtns realtime={realtime}>
                <button onClick={() => setRealTimeBtn(1)}>DEFAULT</button>
                <button onClick={() => setRealTimeBtn(2)}>SCHOLARLY</button>
                <button onClick={() => setRealTimeBtn(3)}>CUSTOM</button>
              </RealTimeBtns>
            </SeoContainer>
            {
              realtime === 3 && 
              <CustomForm 
                label='Custom Search Operators' 
                isInput={true} 
                subText="You can use da (Domain Authority), site, and filetype search operators to influence which sites are used as a source. Please read the documentation for more information."
              />
            }
            <CustomSwtich 
              title='Cite Sources' 
              text='If enabled, we will attempt to cite sources from the real-time data that we fetch. Works best when using GPT-4. Sometimes GPT-3.5 will not be able to properly cite sources.'
            />
          </>
        }
        <CustomSwtich 
          title='Use Outline Editor' 
          text='If enabled, an outline will first be created before your article is written. You can re-order, delete, and add new sections to the outline before generating the article!'
        />
        <CustomSwtich 
          title='Include FAQ Section' 
          value={isFAQ}
          event={setFAQ}
          text='If enabled, we will add a FAQ section based on real-time data. Structured Data schema is automatically included. When using our built-in WordPress integration, the connected user must be an Editor or Admin (not an Author) otherwise the FAQ schema will be messed up when publishing.'
        />
        <CreateButton onClick={() => generateAnswer()}>
          ✨ Create Article ✨
        </CreateButton>
        <Usage>
          Current Usage: <p /> 156 / 5,000 words used. Get more by <span>upgrading your account.</span>
        </Usage>
    </GPTContianer>
  );
};

export default GPTSetting

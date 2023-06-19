import React, { useState, useEffect } from "react";
import {
  AnswerContainer,
  AnswerWrapper,
  BtnContainer
} from "./styles";
import ReactMarkdown from 'react-markdown'
import { LoadingComponent } from "@/component/loading";
import { callGPT } from "@/actions/gptAction";
import { MdArrowBackIos } from "react-icons/md";
import { useRouter } from "next/router";

const GPTSetting = () => {
  const router = useRouter();
  const [isLoading, setLoading] = useState<boolean>(false);
  const [generatedAnswer, setAnswer] = useState<string>(``);

  useEffect(() => {
    const prompt: string | null = localStorage.getItem('prompt');
    if(prompt) {
      generateAnswer(prompt);
      localStorage.removeItem('prompt');
    }
  }, []);

  const generateAnswer = async (prompt: string) => {
    setLoading(true);
    const answer: any = await callGPT(prompt);
    setAnswer(answer);
    setLoading(false);
  }

  return (
    <AnswerContainer>
      <BtnContainer>
        <button onClick={() => router.push('/')}>
          <MdArrowBackIos />
          Go Back
        </button>
      </BtnContainer>
      {isLoading ? 
        <LoadingComponent /> : 
        <AnswerWrapper>
            <ReactMarkdown children={generatedAnswer} />
        </AnswerWrapper>
      }
    </AnswerContainer>
  );
};

export default GPTSetting

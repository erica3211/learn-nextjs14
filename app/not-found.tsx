import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Not Found",
  description: "The best movies on the best framework"
};

export default function NotFound(){
    return <h1>Not Found!</h1>
}
import React, { useEffect, useState } from "react";
import Footer from "../Components/footer";
import HomePageCard from "../Components/HomePage/HomepageCards";
import Navbar from "../Components/Navbar";
import WorkCard from "../Components/Work/WorkCard";
import { callApiWithToken } from "../fetch";
import { Graphics, GraphicsType, Work } from "../Models/baseModels";

const GraphicPage = () => {
    const [isLoading, setLoading] = useState(false);
    const [content, setContent] = useState<Graphics[]>([]);
    const [illustrationRenderer, setIllustrationRenderer] = useState<JSX.Element[]>([]);
    const [photographRenderer, setPhotographRenderer] = useState<JSX.Element[]>([]);
    const [gencodeRenderer, setGencodeRenderer] = useState<JSX.Element[]>([]);

    const getWorkData = async () => {
        setLoading(true);
        let workData = await callApiWithToken("", "https://portfolio-20015.firebaseio.com/data/graphics.json");
        if (workData.status === 200) {
            let body: any = workData.body;
            let graphicsPortfolio: Graphics[] = body;
            if (graphicsPortfolio && graphicsPortfolio.length > 0) {
                setContent(graphicsPortfolio);

            }
        }
        setLoading(false);
    }

    useEffect(() => {
        (async () => {
            await getWorkData();
        })();
    }, [])




    useEffect(() => {
        let illustrationRenderer: JSX.Element[] = [];
        let photographRenderer: JSX.Element[] = [];
        let gencodeRenderer: JSX.Element[] = [];
        if (((content.length > 0)) && !isLoading) {

            content.forEach(p => {
                switch (p.type) {
                    case GraphicsType.Illustration:
                        illustrationRenderer.push(
                            <div className="p-4  my-6  ">
                                <img className="w-full bg-yellow-100 h-full min-h-96  rounded-lg" src={p.url} alt="illustration" />
                            </div>
                        );
                        break;
                    case GraphicsType.photograph:
                        photographRenderer.push(
                            <div className=" p-4 my-6 ">
                                <img className="w-full bg-yellow-100  min-h-96  rounded-lg max-h-screen " src={p.url} alt="photograph" />
                            </div>
                        );
                        break;
                    case GraphicsType.gencode:
                        gencodeRenderer.push(
                            <div className=" p-4 my-6 ">
                                <img className="w-full bg-yellow-100  min-h-96  rounded-lg max-h-screen " src={p.url} alt="gencode" />
                            </div>
                        );

                }

            });

        } else {
            illustrationRenderer.push(
                <div className="w-full bg-yellow-100 rounded-lg h-96 animate-pulse p-4  my-6  ">

                </div>
            );
            illustrationRenderer.push(
                <div className="w-full bg-yellow-100 rounded-lg h-96 animate-pulse p-4  my-6  ">

                </div>
            );
            illustrationRenderer.push(
                <div className="w-full bg-yellow-100 rounded-lg h-96 animate-pulse p-4  my-6  ">

                </div>
            );
            photographRenderer.push(
                <div className="w-full bg-yellow-100 rounded-lg h-96 animate-pulse p-4  my-6  ">

                </div>
            );
            photographRenderer.push(
                <div className="w-full bg-yellow-100 rounded-lg h-96 animate-pulse p-4  my-6  ">

                </div>
            );
            photographRenderer.push(
                <div className="w-full rounded-lg h-96 animate-pulse p-4  my-6  ">

                </div>
            );
            gencodeRenderer.push(
                <div className="w-full bg-yellow-100 rounded-lg h-96 animate-pulse p-4  my-6  ">

                </div>
            );
            gencodeRenderer.push(
                <div className="w-full bg-yellow-100 rounded-lg h-96 animate-pulse p-4  my-6  ">

                </div>
            );
            gencodeRenderer.push(
                <div className="w-full rounded-lg h-96 animate-pulse p-4  my-6  ">

                </div>
            );
        }
        setIllustrationRenderer(illustrationRenderer);
        setPhotographRenderer(photographRenderer);
        setGencodeRenderer(gencodeRenderer);
    }, [content, isLoading])

    return (
        <div className="w-full min-h-screen p-10 bg-yellow-200">
            <Navbar selected="visualart" />

            <div className="w-full pt-5 sm:p-10 text-center">
                {illustrationRenderer.length > 0 && <>
                    <span className="text-4xl font-bold text-yellow-600">Illustrations</span>
                    <div className="flex flex-col sm:block sm:masonry before:box-inherit after:box-inherit">
                        {illustrationRenderer}
                    </div>
                </>
                }

                {gencodeRenderer.length > 0 && <>
                    <span className={" text-center  text-4xl font-bold text-yellow-600" + (illustrationRenderer.length > 0 ? " mt-10" : "")}>Generative Coding
                        <span className="ml-5 inline-block">
                            <a href="https://www.instagram.com/gencodeartist/" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#3b5998" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                            </a>
                        </span>
                    </span>
                    <div className="flex flex-col sm:block sm:masonry before:box-inherit after:box-inherit">
                        {gencodeRenderer}
                    </div>
                </>
                }

                {photographRenderer.length > 0 && <>
                    <span className={"text-4xl font-bold text-yellow-600" + (illustrationRenderer.length > 0 || gencodeRenderer.length > 0 ? " mt-10" : "")}>Photography</span>
                    <div className="flex flex-col sm:block sm:masonry before:box-inherit after:box-inherit">
                        {photographRenderer}
                    </div>
                </>
                }





            </div>
            <Footer color="yellow" showSocials />
        </div>




    )
}

export default GraphicPage;
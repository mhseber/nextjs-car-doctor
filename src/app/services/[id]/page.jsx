import ArrowIcons from '@/app/Icons/ArrowIcons';
import DownloadIcons from '@/app/Icons/DownloadIcons';
import dbConnect, { collectionNamesObj } from '@/lib/dbConnect';
import { ObjectId } from 'mongodb';
import Image from 'next/image';
import React from 'react';

export default async function ServiceDetailsPage({ params }) {
    const p = await params;
    const serviceCollection = dbConnect(collectionNamesObj.servicesCollection);
    const data = await serviceCollection.findOne({ _id: new ObjectId(p.id) });

    return (
        <div className='container mx-auto'>
            <section className='flex justify-center '>
                <figure className='relative'>
                    <Image
                        src={"/assets/images/checkout/checkout.png"}
                        width={1137}
                        height={300}
                        alt={"banner"}
                    />
                    <div className=' transparent-layer overlay-bg absolute w-full h-full  top-0'>
                        <div className='w-full h-full flex items-center ps-16 text-2xl font-bold'>
                            <div>
                                <h1 className='text-white text-4xl'>Service Details</h1>
                            </div>
                            <div className='flex justify-center items-center  pt-60'>
                                <h1 className='  text-white bg-red-600 text-2xl p-2 rounded-xl text-center'>Home/Service Details</h1>
                            </div>
                        </div>
                    </div>
                </figure>
            </section>

            <section className='flex justify-between p-16 pt-20'>
                <div className=''>
                    <Image
                        className='rounded-2xl'
                        src={data.img}
                        width={752}
                        height={400}
                        alt={data.title}
                    />
                    <h1 className='font-bold text-3xl pt-3'>
                        {data.title}
                    </h1>
                    <p className='pt-3  text-gray-400'>There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration in some form,by injected <br /> humour, or randomised words which don't look even slightly believable.<br /> If you are going to use a passage of Lorem Ipsum, you need to <br />  be sure there isn't anything embarrassing hidden in the middle of text. </p>
                </div>
                <div className=' bg-slate-200 rounded-2xl  w-[300px] h-[400px] '>
                    <h1 className='p-4 text-xl font-extrabold '>Services</h1>
                    <div className='p-8 '>
                        <p className='gap-12 flex w-[230px] h-[50px] mb-2 p-2 hover:bg-red-500 font-bold bg-white'>Full Car Repair <ArrowIcons /></p>
                        <p className='gap-9 flex w-[230px] h-[50px] mb-2 p-2 font-bold hover:bg-red-500 bg-white'>Engine Repair <ArrowIcons /></p>
                        <p className='gap-8 flex w-[230px] h-[50px] mb-2 p-2 font-bold hover:bg-red-500 bg-white'>Automatic Services <ArrowIcons /></p>
                        <p className='gap-8 flex w-[230px] h-[50px] mb-2 p-2 font-bold hover:bg-red-500 bg-white'>Engine Oil Change <ArrowIcons /></p>
                        <p className='gap-8 flex w-[230px] h-[50px] mb-2 p-2 font-bold hover:bg-red-500 bg-white'>Battery Charge <ArrowIcons /></p>
                    </div>
                </div>
            </section>
            {/* box */}
            <section className='flex justify-between pl-16 '>
                <div className='grid lg:grid-cols-2 grid-cols-1 gap-3'>
                    {/* 1 */}
                    <div className='w-[360px] h-[180px] p-3 bg-gray-200  border-t-2 rounded-2xl border-red-700'>
                        <h1 className='text-xl font-bold pt-3'>Instant Car Services</h1>
                        <p className='text-gray-400 pt-3'>It uses a dictionary of over 200 Latin words, combined with a model sentence structures.</p>
                    </div>
                    {/* 2 */}
                    <div className='w-[360px] h-[180px] p-3 bg-gray-200 border-t-2 rounded-2xl border-red-700'>
                        <h1 className='text-xl font-bold pt-3'>24/7 Quality Service</h1>
                        <p className='text-gray-400 pt-3'>It uses a dictionary of over 200 Latin words, combined with a model sentence structures.</p>
                    </div>
                    {/* 3 */}
                    <div className='w-[360px] h-[180px] p-3 bg-gray-200 border-t-2 rounded-2xl border-red-700'>
                        <h1 className='text-xl font-bold pt-3'>Easy Customer Service</h1>
                        <p className='text-gray-400 pt-3'>It uses a dictionary of over 200 Latin words, combined with a model sentence structures.</p>
                    </div>
                    {/* 4 */}
                    <div className='w-[360px] h-[180px] p-3 bg-gray-200 border-t-2 rounded-2xl border-red-700'>
                        <h1 className='text-xl font-bold pt-3'>Quality Cost Service</h1>
                        <p className='text-gray-400 pt-3'>It uses a dictionary of over 200 Latin words, combined with a model sentence structures.</p>
                    </div>
                </div>
                {/* box 2 */}
                <div className='mt-[-280px] mr-8'>
                    <div className='w-[360px] h-[250px] p-3 bg-black  border-2 rounded-xl '>
                        <div className='p-6'>
                            <h1 className='title text-xl text-white font-bold'>Download</h1>
                            <div className='flex gap-3'>
                                <div className='text-white pt-6'><DownloadIcons /></div>
                                <div className='p-4'>
                                    <h1 className='text-white font-semibold'>Our Brochure</h1>
                                    <p className='text-gray-400'>Download</p>
                                </div>
                                <button className="btn btn-error text-white ml-10 mt-6 "><ArrowIcons /></button>
                            </div>
                            <div className='flex gap-3'>
                                <div className='text-white pt-6'><DownloadIcons /></div>
                                <div className='p-4'>
                                    <h1 className='text-white font-semibold'>Company Details</h1>
                                    <p className='text-gray-400'>Download</p>
                                </div>
                                <button className="btn btn-error text-white ml-8 mt-6 "><ArrowIcons /></button>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            {/* car-doctor */}
            <section>
                <div className='flex justify-end mt-[-380px] mr-8'>
                    <div className='w-[360px] h-[500px] p-3 bg-black  border-2 rounded-xl '>
                        <div className=' flex justify-center '>
                            <Image className=' pt-8' src={"/assets/logo.svg"} alt="logo" width={107} height={87} />
                        </div>
                        <div>
                            <h1 className='text-center text-white font-medium text-2xl pt-5'>Need Help? We Are Here
                                <br />To Help You</h1>
                        </div>
                        <div className=' justify-center mx-auto w-[270px] h-[126px] rounded-xl bg-white mt-8'>
                            <h1 className='text-center text-xl font-extrabold pt-6'><span className='text-red-600'>Car Doctor </span>Special</h1>
                            <p className='text-center  font-extrabold'> <span className='text-gray-400'>Save up to </span><span className='text-red-600'>60% off</span></p>

                        </div>
                        <div className=' flex justify-center mt-[-20px]'>
                            <button className="btn bg-red-600 btn-error text-white">Get A Quote</button>
                        </div>
                    </div>
                </div>
            </section>
            {/* text */}
            <section>
                <p className='text-xl text-gray-400 p-16 mt-[-150px]'>There are many variations of passages of Lorem Ipsum available, <br />but the majority have suffered alteration in some form, by <br />injected humour, or randomised words which don't look even slightly <br /> believable. If you are going to use a passage of <br /> Lorem Ipsum, you need to be sure there isn't anything <br />embarrassing hidden in the middle of text. </p>
                <div className='flex'>
                    <div className='p-16  mt-[-80px]'>
                        <h1 className='text-3xl font-extrabold'>3 Simple Steps to Process</h1>
                        <p className='text-xl text-gray-400 pt-6'>There are many variations of passages of Lorem Ipsum available, <br />but the majority have suffered alteration in some form, by <br />injected humour, or randomised words which don't look even slightly <br /> believable. If you are going to use a passage of <br /> Lorem Ipsum, you need to be sure there isn't anything <br />embarrassing hidden in the middle of text. </p>
                    </div>
                    <div className='pl-40'>
                        <p className='text-4xl font-bold'>Price $250.00</p>
                        <button className="btn w-[364px] h-[56px] bg-red-600 btn-error text-white mt-3 ">Proceed Checkout</button>
                    </div>
                </div>
            </section>
            {/* steps */}
            <section className='pl-16 flex gap-9'>
                <div className='border-t-2 border-gray-400'>
                    <div className='pt-7'>
                        <p className='w-[60.96px] h-[60.96px] bg-red-600 rounded-full text-center pt-2 text-white text-xl border-8 border-gray-300'>01</p>
                        <h1 className='pt-4 text-xl font-bold'>STEP ONE</h1>
                        <p className='text-gray-500'>It uses a dictionary <br /> of over 200 .</p>
                    </div>
                </div>
                <div className='border-t-2 border-gray-400'>
                    <div className='pt-7'>
                        <p className='w-[60.96px] h-[60.96px] bg-red-600 rounded-full text-center pt-2 text-white text-xl border-8 border-gray-300'>02</p>
                        <h1 className='pt-4 text-xl font-bold'>STEP TWO</h1>
                        <p className='text-gray-500'>It uses a dictionary <br /> of over 200 .</p>
                    </div>
                </div>
                <div className='border-t-2 border-gray-400'>
                    <div className='pt-7'>
                        <p className='w-[60.96px] h-[60.96px] bg-red-600 rounded-full text-center pt-2 text-white text-xl border-8 border-gray-300'>03</p>
                        <h1 className='pt-4 text-xl font-bold'>STEP THREE</h1>
                        <p className='text-gray-500'>It uses a dictionary <br /> of over 200 .</p>
                    </div>
                </div>

            </section>
        </div>
    );
};


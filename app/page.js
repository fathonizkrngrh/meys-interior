'use client';
import Image from 'next/image';
import NavBar from './components/NavBar';
import { Button, Carousel } from '@material-tailwind/react';
import { ArrowRightIcon, ArrowUpRightIcon } from '@heroicons/react/24/outline';
import HeroImg from '@/assets/image/hero.jpg';
import LogoSmall from '@/assets/image/logo-small.png';
import { useRouter } from 'next/navigation';

export default function Home() {
	const router = useRouter();

	return (
		<div>
			<NavBar logo={true} />
			<section className='bg-primary '>
				<div className='w-full relative flex flex-col md:flex-row mx-auto max-w-screen-2xl'>
					<div className='flex flex-col md:flex-row w-full md:w-3/5 px-4 py-16 md:px-8 md:py-32'>
						<div className='flex flex-col gap-8 w-full md:w-3/5 px-8 py-4 border-l-2 border-secondary '>
							<p className='tracking-widest font-medium'>YOUR ROOM IS OUR PRIORITY</p>
							<p className='mb-6 text-7xl md:text-6xl'>An aesthetic room is given harmony</p>
							<p className='leading-relaxed tracking-wide text-gray-700 font-thin'>
								Change your view to realize a neat and aesthetic corner of the house and amaze everyone, especially your nuclear family. Make every moment of your home equipment a
								valuable item.
							</p>
							<div className='flex items-stretch'>
								<Button variant='filled' size='lg' color='black' className='text-lg rounded-full font-thin px-6 py-4 flex items-center'>
									<p>Explore Now</p> <ArrowUpRightIcon width='24' />
								</Button>
							</div>
						</div>
					</div>
					<div className=' w-full md:w-2/5 bg-gray-400 '>
						<Image alt='hero' src={HeroImg} className='relative h-auto md:h-full object-cover object-left' />
					</div>
				</div>
			</section>
			<section className='bg-secondary/20'>
				<div className='flex flex-col md:flex-row items-center mx-auto max-w-screen-2xl px-4 py-8 md:py-12 text-gray-700'>
					<div className='w-full md:w-1/3 md:justify-center'>
						<p className='mb-6 text-2xl md:text-lg text-center md:text-left'>Trusted by many companies</p>
					</div>
					<div className='flex flex-row w-full md:w-2/3 justify-between'>
						{[0, 1, 2, 3, 4, 5].map((item) => (
							<div>
								<Image alt='logo' src={LogoSmall} className='h-12 w-auto' />
							</div>
						))}
					</div>
				</div>
			</section>
			<section className='bg-primary'>
				<div className='flex flex-col gap-12 px-4 py-24 md:py-36 mx-auto max-w-screen-2xl items-center justify-between'>
					<div className='w-full'>
						<div className='flex flex-col md:flex-row items-center md:justify-between'>
							<div className='md:w-1/2'>
								<p className='mb-6 text-2xl text-center md:text-left md:text-5xl'>An aesthetic room is given harmony</p>
							</div>
							<div className=''>
								<p className='font-medium text-xl tracking-widest text-tertiary'>WORLD AWARD</p>
							</div>
						</div>
					</div>
					<div className='relative'>
						<div className='relative md:absolute top-0 left-0 w-full md:w-2/5 md:h-full'>
							<Image alt='hero' src={HeroImg} className='relative h-auto md:h-full object-cover' />
						</div>
						<div className='flex flex-col md:flex-row justify-end mx-auto max-w-screen-2xl px-4 py-4 md:px-8 md:py-8'>
							<div className='flex flex-col gap-8 w-full md:w-1/2 px-4 md:px-2 py-4'>
								<p className='leading-relaxed tracking-wide text-gray-700 font-thin text-justify'>
									Change your view to realize a neat and aesthetic corner of the house and amaze everyone, especially your nuclear family. Make every moment of your home equipment a
									valuable item. Change your view to realize a neat and aesthetic corner of the house and amaze everyone, especially your nuclear family. Make every moment of your
									home equipment a valuable item.
								</p>
								<div className='flex items-stretch'>
									<Button variant='filled' size='lg' color='black' className='text-lg rounded-full font-thin px-6 py-4 flex items-center'>
										<p>SEE ALL</p> <ArrowUpRightIcon width='24' />
									</Button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className='bg-primary'>
				<div className='mx-auto grid gap-0 md:grid-cols-4'>
					{['BEDROOM', 'KITCHEN', 'FAMILY', 'OFFICE'].map((room, idx) => (
						<div key={idx} className='group h-72 md:h-[600px] w-full'>
							<div className='relative h-full w-full md:min-h-[500px]  transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]'>
								<div className='absolute inset-0 h-full w-full  [transform:rotateY(180deg)] [backface-visibility:hidden]'>
									<Image className='bg-cover bg-center object-cover cursor-pointer object-left h-full w-full' src={HeroImg} alt={room} width={320} height={320} />
									<div className='absolute inset-0 flex items-center md:items-start justify-center'>
										<div className='bg-primary px-4 py-4 md:mt-12 w-4/5 flex flex-col gap-8 items-center justify-center'>
											<div className='flex flex-row justify-between w-full'>
												<p>SETUP </p>
												<p>0{idx + 1}</p>
											</div>
											<div className='flex flex-col gap-2 w-full'>
												<p className='text-2xl text-gray-800'>{room}</p>
												<p className='text-sm text-gray-600'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
											</div>
											<div className='flex gap-2 w-full items-center'>
												<Button variant='outlined' size='sm' color='black' className='text-sm rounded-full font-thin flex items-center gap-2'>
													<p>SEE DETAILS</p> <ArrowRightIcon width='16' />
												</Button>
											</div>
										</div>
									</div>
								</div>

								<div
									className={`absolute inset-0 h-full w-full bg-secondary/20 px-12 py-24 text-center text-slate-200 [backface-visibility:hidden] ${
										idx + 1 !== 5 ? 'border-secondary border-b-2 md:border-r-2 md:border-b-0 ' : ''
									}`}
								>
									<div className='flex min-h-full flex-row md:flex-col items-center justify-between'>
										<p className='text-2xl md:text-3xl font-medium tracking-wider'>0{idx + 1}</p>
										<p className='md:[writing-mode:vertical-lr] md:-rotate-180 whitespace-nowrap tracking-wider text-xl md:text-3xl font-medium'>{room} SETUP</p>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</section>
			<section className='bg-primary'>
				<div className='flex flex-col gap-16 py-24 md:py-36 px-4 mx-auto max-w-screen-2xl justify-between w-full'>
					<div className='flex flex-col md:flex-row gap-4 text-gray-900'>
						<div className='w-full md:w-1/2'>
							<p className='text-8xl text-left'>
								Modern <br /> Classic
							</p>
						</div>
						<div className='flex flex-col gap-4 w-full md:w-1/2'>
							<div className='w-full'>
								<p className='text-3xl text-left'>Luxury decor to create comfort in our home</p>
							</div>
							<div className='flex flex-col md:flex-row  text-gray-700 gap-4 md:gap-8'>
								<div className='w-full md:w-3/5 '>
									<p className=''>With our passion for extraordinary room solutions and our uncomprimising quality awareness of craftmanship, we create functional ones</p>
								</div>
								<div className='w-full md:w-2/5 flex flex-col gap-4'>
									<p>We create distinctive interior with a unique athmossphere</p>
									<div>
										<Button variant='outlined' size='sm' color='black' className='text-sm rounded-full font-thin flex items-center gap-2'>
											<p>View Gallery</p> <ArrowUpRightIcon width='16' />
										</Button>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='h-[600px] w-full mx-auto flex justify-center '>
						<Carousel
							className=''
							navigation={({ setActiveIndex, activeIndex, length }) => (
								<div className='absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2'>
									{new Array(length).fill('').map((_, i) => (
										<span
											key={i}
											className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? 'w-8 bg-white' : 'w-4 bg-white/50'}`}
											onClick={() => setActiveIndex(i)}
										/>
									))}
								</div>
							)}
						>
							<img
								src='https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
								alt='image 1'
								className='h-full w-full object-cover'
							/>
							<img
								src='https://plus.unsplash.com/premium_photo-1724500534820-cf8325975919?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
								alt='image 2'
								className='h-full w-full object-cover'
							/>
							<img
								src='https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
								alt='image 3'
								className='h-full w-full object-cover'
							/>
						</Carousel>
					</div>
				</div>
			</section>
			<section className='bg-secondary/20'>
				<div className='flex flex-col gap-8 py-8 md:py-16 px-4 mx-auto max-w-screen-2xl  justify-between w-full'>
					<div className='flex flex-col md:flex-row justify-between gap-8'>
						<div className='flex flex-col'>
							<p className='text-4xl md:text-6xl'>Let's</p>
							<p className='text-6xl md:text-8xl '>Follow Our Instagram</p>
						</div>
						<div className='flex items-center'>
							<Button
								variant='outlined'
								size='md'
								color='black'
								className='rounded-full flex items-center gap-2 '
								onClick={() => router.push('https://www.instagram.com/meys_interior/')}
							>
								<svg className='h-8 w-8' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'>
									<path d='M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z' />
								</svg>
								<p className='text-sm font-medium tracking-wide'>Follow Us</p>
								<ArrowUpRightIcon width='16' />
							</Button>
						</div>
					</div>
				</div>
				<hr className='bg-secondary px-4 h-1 mx-auto max-w-screen-2xl w-full' />
			</section>
			<Button
				variant='filled'
				size='sm'
				color='black'
				className='fixed z-90 bottom-10 rounded-full right-8 flex items-center gap-2 bg-green-300'
				onClick={() => router.push('https://wa.me/6281546523507')}
			>
				<svg xmlns='http://www.w3.org/2000/svg' className='h-8 w-8 ' color='#bfbfbf' viewBox='0 0 448 512'>
					<path
						fill='#fbfbfb'
						d='M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z'
					/>
				</svg>
				<p className='text-sm font-medium tracking-wide'>Contact Us</p>
			</Button>
		</div>
	);
}

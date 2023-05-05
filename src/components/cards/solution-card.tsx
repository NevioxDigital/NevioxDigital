import {
    Card,
    CardHeader,
    CardBody,
    Typography
  } from "@material-tailwind/react";

export const SolutionCard = ({ title, image, description } : { title:string,image:string,description:string}) => {

    
    return (
            <div className="mr-16">   
                <Card
                shadow={false}
                className="relative grid h-[32rem] w-full max-w-[24rem] items-end justify-center overflow-hidden text-center"
                >
                <CardHeader
                    floated={false}
                    shadow={false}
                    color="transparent"
                    className={`absolute inset-0 m-0 h-full w-full rounded-none text-big card-image-${image}`}
                    >
                    <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
                </CardHeader>
                <CardBody className="relative py-14 px-6 md:px-12">
                    <Typography variant="h2" color="white" className="mb-6 font-medium font-body leading-[0.8]">
                    {description}
                    </Typography>
                    <Typography variant="h5" className="mb-4 text-gray-400 font-title">
                    {title}
                    </Typography>
                </CardBody>
                </Card>
            </div>
      );
};

interface ImgCardProps {
    src: string;
    description: string;
}

function ImgCard({ src, description }: ImgCardProps) {
    return (
        <div className="crd card-white col-4">
            <img src={src}/>
            <hr />
            <p>{description}</p>
        </div>
    );
}

export default ImgCard;
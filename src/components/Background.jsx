import backgroundDesktop from '../images/Desktop-star-background.png'

export function BackgroundDesktop() {


    return <>
        <div className="w-full absolute -z-10 top-2">
            <img src={backgroundDesktop}
                alt="background image"
                className="min-w-full h-80 object-cover" />
        </div>
    </>
}
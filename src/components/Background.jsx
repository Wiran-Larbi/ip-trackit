import backgroundDesktop from '../gif/background7.gif'

export function BackgroundDesktop() {


    return <>
        <div className="w-full absolute -z-10 top-2">
            <img src={backgroundDesktop}
                alt="background image"
                className="min-w-full h-auto object-cover" />
        </div>
    </>
}
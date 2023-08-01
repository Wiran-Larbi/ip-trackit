import backgroundDesktop from '../images/pattern-bg-desktop.png'

export function BackgroundDesktop() {


    return <>
    <div className="w-full absolute -z-10">
          <img src={backgroundDesktop} 
              alt="background image"
              className="min-w-full h-80 object-cover" />
        </div>
    </>
}
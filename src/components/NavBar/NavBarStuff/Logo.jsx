import LogoPhone from '../../../images/logo-phone.png';
import LogoLarge from '../../../images/logo-1.png';


export function Logo() {

    return (
        <>
            <div className="mb-4 flex flex-shrink-0 items-center">
                <img
                    className="h-20 w-auto"
                    src={LogoLarge}
                    alt="IpTrackit"
                />
            </div>
        </>
    )
}
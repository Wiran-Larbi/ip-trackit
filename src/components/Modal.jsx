import { Info } from "./Info"


export function Modal({address}) {


    return <>
        <article className="bg-white rounded-lg shadow p-8 grid gap-8 sm:mx-8 sm:grid-cols-1 sm:gap-8 md:grid-cols-2 md:gap-8 lg:grid-cols-4 lg:max-w-6xl lg:mx-auto text-center md:text-left">

        <Info title="Ip Address" value={address.ip} hasBorder={true} />
        <Info title="Location" value={address.location.region + ' ' + address.location.country} hasBorder={true} />
        <Info title="Timezone" value={'UTC' + address.location.timezone} hasBorder={true} />
        <Info title="Isp" value={address.isp} hasBorder={false} />

        </article>
    </>
}
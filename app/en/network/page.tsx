import Networklist from "@/app/en/component/network/networklist"
import Networkcompany from "@/app/en/component/network/networkcompany"
import '../component/network/networkcompany.css'
export default function page() {


    return (
        <div>
            <Networkcompany />
            <Networklist />

        </div>
    )
}

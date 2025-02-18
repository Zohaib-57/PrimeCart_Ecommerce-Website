/* eslint-disable react/prop-types */
import {
    Button,
    Dialog,
    DialogBody,
} from "@material-tailwind/react";
import { useState } from "react";

const BuyNowModal = ({ addressInfo, setAddressInfo, buyNowFunction }) => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(!open);
    return (
        <>
            <Button
                type="button"
                onClick={handleOpen}
                className="w-full px-4 py-3 text-center text-[#D9E2E0] bg-[#5B4E3F] border border-transparent hover:border-[#A0BDB4] hover:text-[#557752] hover:bg-[#D9E2E0] rounded-xl"
            >
                Buy now
            </Button>
            <Dialog open={open} handler={handleOpen} className="bg-[#D9E2E0]">
                <DialogBody>
                    <div className="mb-3">
                        <input
                            type="text"
                            name="name"
                            value={addressInfo.name}
                            onChange={(e) => {
                                setAddressInfo({
                                    ...addressInfo,
                                    name: e.target.value
                                })
                            }}
                            placeholder='Enter your name'
                            className='bg-[#D9E2E0] border border-[#A0BDB4] px-2 py-2 w-full rounded-md outline-none text-[#435F42] placeholder-[#A0BDB4]'
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="text"
                            name="address"
                            value={addressInfo.address}
                            onChange={(e) => {
                                setAddressInfo({
                                    ...addressInfo,
                                    address: e.target.value
                                })
                            }}
                            placeholder='Enter your address'
                            className='bg-[#D9E2E0] border border-[#A0BDB4] px-2 py-2 w-full rounded-md outline-none text-[#435F42] placeholder-[#A0BDB4]'
                        />
                    </div>

                    <div className="mb-3">
                        <input
                            type="number"
                            name="pincode"
                            value={addressInfo.pincode}
                            onChange={(e) => {
                                setAddressInfo({
                                    ...addressInfo,
                                    pincode: e.target.value
                                })
                            }}
                            placeholder='Enter your pincode'
                            className='bg-[#D9E2E0] border border-[#A0BDB4] px-2 py-2 w-full rounded-md outline-none text-[#435F42] placeholder-[#A0BDB4]'
                        />
                    </div>

                    <div className="mb-3">
                        <input
                            type="text"
                            name="mobileNumber"
                            value={addressInfo.mobileNumber}
                            onChange={(e) => {
                                setAddressInfo({
                                    ...addressInfo,
                                    mobileNumber: e.target.value
                                })
                            }}
                            placeholder='Enter your mobileNumber'
                            className='bg-[#D9E2E0] border border-[#A0BDB4] px-2 py-2 w-full rounded-md outline-none text-[#435F42] placeholder-[#A0BDB4]'
                        />
                    </div>

                    <div>
                        <Button
                            type="button"
                            onClick={() => {
                                handleOpen();
                                buyNowFunction();
                            }}
                            className="w-full px-4 py-3 text-center text-[#D9E2E0] bg-[#557752] border border-transparent rounded-lg cursor-pointer hover:bg-[#435F42]"
                        >
                            Buy now
                        </Button>
                    </div>
                </DialogBody>
            </Dialog>
        </>
    );
}

export default BuyNowModal;

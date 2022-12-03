import React, { useState } from "react";
import { toastr } from 'react-redux-toastr'
import { Form, Row, Modal, Button } from "react-bootstrap";
import { useDispatch } from 'react-redux';
import { addDonationAmount,getCryptoRateList } from '../../actions'
import useValidator from '../common/hooks/useValidator';
import Loader from '../common/loader/Loader'
import { MESSAGES } from "../../config/Constant";


const AddHazardModal = (props) => {
    const dispatch = useDispatch();
    const { campaignData, currencyList } = props
    const formFields = { donation_amount: 0, currency: 'Select', total_amount: '' }
    const [fields, setField] = useState(formFields);
    const [loading, setLoading] = useState(false);
    const [cryptoAmount, setCryptoAmount] = useState(0);
    const [validator, showValidationMessage] = useValidator();


    /**
    * @method upLoadPolicy
    * @description handle new policy upload
    */
    const upLoadPolicy = () => {
        setLoading(true)
        const reqData = {
            id: campaignData && campaignData.id,
            donation_amount: fields.donation_amount,
            currency: fields.currency,
            total_amount: cryptoAmount
        }

        console.log('reqData',reqData)
        dispatch(addDonationAmount(reqData, res => {
            setLoading(false)
            if (res.status === 200) {
                toastr.success('Success', MESSAGES.AMOUNT_ADD_SUCCESS)
                props.onCancel()
                props.callNext()
            }
        }))
    }

    /**
     * @method handleSubmit
     * @description handle policy form submit
     */
    const handleSubmit = (e) => {
        e.preventDefault();
        (validator.allValid()) ? upLoadPolicy() : showValidationMessage(true);
    }

    /**
     * @method handleChange
     * @description handle input change
     */
    const handleChange = (e) => {
        const { name, value } = e.target
        if(name === 'currency' && fields.donation_amount){
            dispatch(getCryptoRateList(value,res => {
                let usd_amount = res.data.data && res.data.data.rates && res.data.data.rates.USD
                let total_amount = (Number(fields.donation_amount) * Number(usd_amount))
                setCryptoAmount(total_amount)
            }))
        }
        setField(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

   

     /**
     * @method renderCurrencyList
     * @description render list of crypto currency
     */
    const renderCurrencyList = () => {
        if (currencyList && currencyList.length) {
            return currencyList.map((el, i) => {
                return (
                    <option  key={i} value={el.symbol}>{el.name}</option>
                )
            })
        }
    }

   
    return (
        <div>
            {loading && <Loader />}
            <Modal
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={props.visible}
                onHide={() => props.onCancel()}
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Add Donation Amount
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3 required" controlId="nameOfDocument">
                                <Form.Label>Donation amount</Form.Label>
                                <Form.Control
                                    type="number"
                                    placeholder="Enter donation amount"
                                    name={'donation_amount'}
                                    value={fields.donation_amount}
                                    onChange={handleChange}
                                />
                                {validator.message('donation_amount', fields.donation_amount, 'required', { className: 'text-danger' })}
                            </Form.Group>

                            <Form.Group className="mb-3 required" controlId="typeOfDocument">
                                <Form.Label>Currency</Form.Label>
                                <Form.Select
                                    defaultValue="Select"
                                    value={fields.currency}
                                    name={'currency'}
                                    onChange={handleChange}
                                >
                                    <option hidden disabled>Select</option>
                                    {renderCurrencyList()}
                                </Form.Select>
                                {validator.message('currency', fields.currency === 'Select' ? '' : fields.currency, 'required', { className: 'text-danger' })}
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="nameOfDocument">
                                <Form.Label>Total amount</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Total amount"
                                    name={'total_amount'}
                                    value={cryptoAmount}
                                    onChange={handleChange}
                                    disabled
                                />
                            </Form.Group>
                            <div className="button-section">
                                <Button variant="success" type="submit" title="Upload">
                                    Donate
                                </Button>
                            </div>
                        </Form>
                    </Row>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default AddHazardModal
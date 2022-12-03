import React, { Fragment, useState, useEffect } from "react";
import { Row, Col, Container, Table, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { getCompaignList, getCryptoCurrencyList } from '../../actions'
import Loader from '../common/loader/Loader'
import { splitDescription, capitalisedFirst } from '../../config/Helper'
import DonationModal from './DonateModal'


const Projects = () => {
    const dispatch = useDispatch()
    const [campaignList, setCampaignList] = useState([])
    const [showModal, setShowModal] = useState(false)
    const [loading, setLoading] = useState(false);
    const [campaignData, setCampaignData] = useState('')
    const [currencyList, setCurrencyList] = useState([])

    useEffect(() => {
        setLoading(true)
        getCampaignListData()
    }, [dispatch])


    /**
    * @method getCampaignListData
    * @description getCampaignListData
    */
    const getCampaignListData = () => {
        dispatch(getCompaignList(res => {
            setLoading(false)
            if (res.status === 200) {
                let data = res.data && res.data.data && Array(res.data.data) && res.data.data.length ? res.data.data : []
                setCampaignList(data)
                getCryptoCurrencyListData()
            }
        }))
    }

    /**
   * @method getCryptoCurrencyListData
   * @description getCryptoCurrencyListData
   */
    const getCryptoCurrencyListData = () => {
        dispatch(getCryptoCurrencyList(res => {
            if (res.status === 200) {
                let data = res.data && res.data.data && Array(res.data.data) && res.data.data.length ? res.data.data : []
                setCurrencyList(data)
            }
        }))
    }


    console.log('currencyList', currencyList)

    return (
        <Container fluid>
            {loading && <Loader />}
            <Row className="custom-row">
                <Col xxl={12} xl={12} lg={12} md={12}>
                    <h1 className="page-title">Campaign List</h1>
                    <Table responsive hover className="v-align-bottom">
                        <tbody>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Amount</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                            {campaignList &&
                                campaignList.map((item) => (
                                    <Fragment>
                                        <tr key={item.id}>
                                            <td>{item.id}</td>
                                            <td>{item.name}</td>
                                            <td>{splitDescription(item.description)}</td>
                                            <td className="text-gray">{item.budget_amount}</td>
                                            <td className="text-gray">{capitalisedFirst(item.status)}</td>
                                            <td>
                                                <Button variant={'secondary'} size="sm" onClick={() => {
                                                    setShowModal(true)
                                                    setCampaignData(item)
                                                }}>
                                                    {'Donate'}
                                                </Button>
                                            </td>
                                        </tr>
                                    </Fragment>
                                ))}
                        </tbody>
                    </Table>
                </Col>
            </Row>
            {showModal &&
                <DonationModal
                    visible={showModal}
                    onCancel={() => setShowModal(false)}
                    campaignData={campaignData}
                    currencyList={currencyList}
                    callNext={() => getCampaignListData()}
                />}
        </Container>
    )
}

export default Projects
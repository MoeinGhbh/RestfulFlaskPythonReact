import React, {Component} from "react";
import "./css/ZoneCard.css";
import {Button} from "@material-ui/core";
import axios from "axios";


class ZoneCardEdit extends Component {
    constructor(props) {
        super(props);
        const {items, zoneName, zoneId, reloadhandledata} = this.props;
        this.state = {
            zoneId: zoneId,
            items: items,
            zoneName: zoneName
        }
    }

    deleteItems = (itemId) => {
        const {items, zoneName, zoneId, reloadhandledata} = this.state;
        console.log('bbbbbbbbbbb', items);

        // if (items == undefined){ alert() }

        let i = 0
        for (i; i < items.length; i++) {
            if (items[i].itemId == itemId) {
                delete items[i];
            }
        }

        let firstitems = JSON.parse(JSON.stringify(items).replace('null,', ''))
        let seconditems = JSON.parse(JSON.stringify(firstitems).replace(',null', ''))
        let newitems = JSON.parse(JSON.stringify(seconditems).replace('null', ''))

        //let newitems2 = JSON.parse(JSON.stringify(newitems).replace(undefined, ''))

        console.log(newitems);


        axios.post('http://127.0.0.1:5000/api/v1.0/delZoneItem?token=' + localStorage.getItem('LStoken'),
            {
                'items': newitems,
                'zoneId': this.state.zoneId
            }
        ).then(res => {
                // if (res.status == 200) {
                this.setState({zoneId: ''})
                this.setState({zoneName: ''})
                this.setState({items: []})
                reloadhandledata()
                alert('تجهیز با موفقیت حذف شد')
                // }
            }
        )
        // .catch(resllt => { alert('تجیز حذف نگردید')    })
    }

    render() {
        const {items, zoneName} = this.props;
        console.log('aaaaaaaaaaaaaaaaa', items);
        return (

            <div className="Card">
                <h3>{zoneName}</h3>
                {
                    items.length > 0 ?

                        items.map(Item => {

                            return (
                                <div>
                                    <table>
                                        <tr>
                                            <td>
                                                <label>{Item.itemName}</label>
                                            </td>
                                            <td>
                                                <Button
                                                    type="button"
                                                    variant="contained"
                                                    color="secondary"
                                                    key={Item.itemId}
                                                    onClick={() => this.deleteItems(Item.itemId)}> حذف
                                                    تجهیز </Button>
                                            </td>
                                        </tr>
                                    </table>
                                </div>)
                        })
                        :
                        null
                }
            </div>
        )
            ;
    }
}

export default ZoneCardEdit;
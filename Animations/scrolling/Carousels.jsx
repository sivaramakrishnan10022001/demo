import React from 'react';
import { ElementItems } from '../../../common/Constants';
import { ImageTextItemTemplate } from '@msf/sbcomponents';
import { Carousel, Carousel3, SampleCarouselItem } from '@msf/sbcomponents';
import ElementsGroup from '../../common/ElementsGroup';
import { ElementsCodes } from '@msf/sbcomponents';

class Carousels extends ElementsGroup {

    componentDidMount() {
        this.setState({
            title: 'Carousels',
            items: ElementItems.Carousels,
            lists: [
                {
                    category: "Sector Update", companyCode: "Dwarikesh Sugar", companyName: "Dwarikesh Sugar Industries Limited",
                    expReturn: "52.78", timePeriod: "12 Month", Status: "Open", callDate: "18 Aug 2021",
                    entry: "72.00", stopLoss: null, target: "110.00", buyOrSell: "Buy",
                },
                {
                    category: "Result Update", companyCode: "NMDC", companyName: "NMDC Ltd",
                    expReturn: "25.75", timePeriod: "12 Month", Status: "Open", callDate: "18 Aug 2021",
                    entry: "167.00", stopLoss: null, target: "210.00", buyOrSell: "Buy",
                },
                {
                    category: "Result Update", companyCode: "INFO EDG.(INDIA)", companyName: "INFO EDGE (INDIA) Ltd",
                    expReturn: "15.24", timePeriod: "6 Month", Status: "Open", callDate: "08 Oct 2021",
                    entry: "5441.00", stopLoss: null, target: "6270.00", buyOrSell: "Buy",
                },
                {
                    category: "Result Update", companyCode: "TRIVEN ENGG IND", companyName: "TRIVEN Engineering and India Ltd",
                    expReturn: "51.69", timePeriod: "12 Month", Status: "Open", callDate: "16 Oct 2021",
                    entry: "178.00", stopLoss: null, target: "270.00", buyOrSell: "Buy",
                },
                {
                    category: "Result Update", companyCode: "NMDC", companyName: "NMDC Ltd",
                    expReturn: "25.75", timePeriod: "12 Month", Status: "Open", callDate: "18 Aug 2021",
                    entry: "167.00", stopLoss: null, target: "210.00", buyOrSell: "Buy",
                },
                {
                    category: "Result Update", companyCode: "INFO EDG.(INDIA)", companyName: "INFO EDGE (INDIA) Ltd",
                    expReturn: "15.24", timePeriod: "6 Month", Status: "Open", callDate: "08 Oct 2021",
                    entry: "5441.00", stopLoss: null, target: "6270.00", buyOrSell: "Buy",
                },
                {
                    category: "Result Update", companyCode: "TRIVEN ENGG IND", companyName: "TRIVEN Engineering and India Ltd",
                    expReturn: "51.69", timePeriod: "12 Month", Status: "Open", callDate: "16 Oct 2021",
                    entry: "178.00", stopLoss: null, target: "270.00", buyOrSell: "Buy",
                },
            ],
            data: [
                { text: "A beautiful place to visit this summer", title: "Hong Kong", source: "https://wowslider.com/sliders/demo-18/data1/images/hongkong1081704.jpg" },
                { text: "A beautiful place to visit this summer", title: "Shanghai", source: "https://wowslider.com/sliders/demo-18/data1/images/shanghai.jpg" },
                { text: "A beautiful place to visit this summer", title: "New York", source: "https://wowslider.com/sliders/demo-18/data1/images/new_york.jpg" },
                { text: "A beautiful place to visit this summer", title: "Hong Kong City", source: "https://wowslider.com/sliders/demo-18/data1/images/hongkong1081704.jpg" },
                { text: "A beautiful place to visit this summer", title: "Shanghai City", source: "https://wowslider.com/sliders/demo-18/data1/images/shanghai.jpg" },
                { text: "A beautiful place to visit this summer", title: "New York City", source: "https://wowslider.com/sliders/demo-18/data1/images/new_york.jpg" }
            ],
        });
    }

    getElement(code) {
        if (code === ElementsCodes.Carousel01) {
            return (
                <Carousel option={1} slideTimer={5000} withArrows={true} width={1000} withPagination={true}
                    withAutoScroll={false} itemTemplate={ImageTextItemTemplate} data={this.state.data}
                />
            )
        } else if (code === ElementsCodes.Carousel02) {
            return (
                <Carousel option={2} slideTimer={5000} withArrows={true} width={1000} withPagination={true}
                    withAutoScroll={false} itemTemplate={ImageTextItemTemplate} data={this.state.data}
                />
            )
        } else if (code === ElementsCodes.Carousel03) {
            return (
                <Carousel3 className="sample" value={this.state.lists} withArrows={true}
                    withPagination={true} slideTimer={4000} withAutoScroll={false} cardWidth={300}>
                    {this.state.lists.map((row, key) => {
                        return (
                            <SampleCarouselItem value={row.category} />
                        )
                    })}
                </Carousel3>
            )
        }
    }

}

export default Carousels;
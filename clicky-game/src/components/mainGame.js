import React from "react";
import ScoreBoard from "./scoreBoorad"

class MainGame extends React.Component {
    state = {
        imgArr: [{
            path: "./clickyImg1.png",
            beenClicked: false,
            id: 1

        }, {
            path: "./clickyImg2.jpg",
            beenClicked: false,
            id: 2

        }, {
            path: "./clickyImg3.png",
            beenClicked: false,
            id: 3
        }, {
            path: "./clickyImg4.jpg",
            beenClicked: false,
            id: 4

        }, {
            path: "./clickyImg5.jpg",
            beenClicked: false,
            id: 5

        }, {
            path: "./clickyImg6.jpg",
            beenClicked: false,
            id: 6
        }, {
            path: "./clickyImg7.png",
            beenClicked: false,
            id: 7
        }, {
            path: "./clickyImg8.jpg",
            beenClicked: false,
            id: 8
        }, {
            path: "./clickyImg9.png",
            beenClicked: false,
            id: 9
        }]
    }
    imageRearrange = (imgId) => {
        console.log(imgId);
        let newArr = this.shuffle(this.state.imgArr)

        this.setState({
            imgArr: newArr

        });


    }
    shuffle = (a) => {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }

    render() {
        return (<div className="container " >
            <div className="row">
                <div className="col-md-8 gameSection" >
                    <div className="container">
                        <div className="row">
                            {this.state.imgArr.map(img => {
                                {
                                    return <div className="col-md-3 gameImages">
                                        <img src={img.path} alt="One" id={img.id} height="200px" onClick={() => this.imageRearrange(img.id)}>

                                        </img>
                                    </div>
                                }
                            })
                            }

                        </div>
                    </div>
                </div>
                <div className="col-md-4 scoreBoard">
                    <ScoreBoard />
                </div>
            </div>
        </div>
        )
    }

}
export default MainGame
import React from 'react';
import { Row } from 'react-bootstrap';
import './styles.css';

const BadgeSection = () => {
    // eslint-disable-next-line no-undef
    const widget = uploadcare.Widget('[role=uploadcare-uploader]');
    // Selecting an image to be replaced with the uploaded one.
    const preview = document.getElementById('preview');
    // "onUploadComplete " lets you get file info once it has been uploaded.
    // "cdnUrl " holds a URL of the uploaded file: to replace a preview with.

    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

    // ctx.globalCompositeOperation = 'destination-in';
    var canvas2 = document.createElement('canvas');
    canvas2.height = canvas2.width = 175;

    var ctx2 = canvas2.getContext('2d');

    function canvasFill(url, flag) {
        var img = new Image();
        img.crossOrigin = 'anonymous';
        img.src = url;
        img.onload = function () {
            fill_canvas(img, flag);
        };

        function fill_canvas(img, flag) {
            if (flag) {
                ctx2.drawImage(img, 0, 0, 175, 175);
                ctx2.globalCompositeOperation = 'destination-in';
                var cw = 175,
                    ch = 175;
                ctx2.beginPath();
                ctx2.arc(cw / 2, ch / 2, ch / 2, 0, Math.PI * 2);
                ctx2.closePath();
                ctx2.fill();

                ctx.drawImage(canvas2, 112, 105);
                return;
            }
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);
        }
    }

    canvasFill('assets/400.png');

    widget.onUploadComplete((fileInfo) => {
        preview.src = fileInfo.cdnUrl;
        preview.style.visibility = 'visible';
        canvasFill(fileInfo.cdnUrl, true);
    });

    function download_image() {
        var text = document.getElementById('texti');
        console.log(text.value);
        ctx.font = "22px 'Poppins', sans-serif";
        ctx.textAlign = 'center';
        ctx.fillStyle = 'white';
        ctx.fillText(text.value, 200, 90);
        var image = canvas
            .toDataURL('image/png ')
            .replace('image/png', 'image/octet-stream');
        var link = document.createElement('a');
        link.download = 'my-badge.png';
        link.href = image;
        link.click();
    }
    return (
        <Row>
            <div className="badge-container w-75">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 p-3 d-flex justify-content-center flex-column ">
                        {/* <!-- Canvas --> */}
                        <canvas id="canvas" className="img-fluid"></canvas>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 p-3 d-flex justify-content-center flex-column">
                        <h1 style={{ color: '#00d5ff' }}>
                            YOUR SPACE TO SHOWCASE.
                        </h1>
                        <br />

                        {/* <!-- Text --> */}
                        <div>
                            <input
                                name="name"
                                type="text"
                                className="w-100 mb-3"
                                id="texti"
                                placeholder="Enter your Name"
                                spellcheck="false"
                            ></input>
                        </div>
                        <br />
                        {/* <!-- Image --> */}

                        <input
                            type="hidden"
                            role="uploadcare-uploader"
                            data-crop="1:1"
                            data-images-only
                            style={{ visibility: 'hidden' }}
                        />
                        <br />
                        <br />
                        <div>
                            <img
                                src=""
                                alt=""
                                id="preview"
                                width={175}
                                height={175}
                                className="fluid-img"
                                style={{ display: 'none' }}
                            />
                        </div>

                        {/* <!-- Download button --> */}
                        <button
                            onClick={download_image}
                            className="btn btn-primary my-3"
                            id="download"
                            style={{
                                backgroundColor: '#00d5ff !important',
                                color: 'white !important',
                                fontSize: '1rem',
                                fontWeight: 'bold',
                            }}
                        >
                            Generate your badge here
                        </button>
                    </div>
                </div>
            </div>
        </Row>
    );
};

export default BadgeSection;

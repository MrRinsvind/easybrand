import React from 'react'

export default function Template1(props) {
    return (
        <table id="template1" cellPadding={0} cellSpacing={0} style={{verticalAlign: '-webkit-baseline-middle', fontSize: 'medium', fontFamily: 'Arial'}}>
            <tbody>
                <tr>
                    <td>
                        <table cellPadding={0} cellSpacing={0} style={{verticalAlign: '-webkit-baseline-middle', fontSize: 'medium', fontFamily: 'Arial'}}>
                            <tbody>
                                <tr>
                                    {/* first column */}
                                    <td style={{verticalAlign: 'top'}}>
                                        <table cellPadding={0} cellSpacing={0} style={{verticalAlign: '-webkit-baseline-middle', fontSize: 'medium', fontFamily: 'Arial', width: '180px'}}>
                                            <tbody>
                                                <tr>
                                                    <td style={{textAlign: 'center'}}>
                                                        <p style={{textAlign: 'center', margin: 0}}>
                                                            <img width={90} src="https://avatarfiles.alphacoders.com/203/203431.jpg" style={{maxWidth: '90px'}} />
                                                        </p>
                                                    </td>
                                                </tr>
                                                {/* profile image */}
                                                <tr>
                                                    <td height={15} />
                                                </tr>
                                                {/* company logo */}
                                                <tr>
                                                    <td style={{textAlign: 'center'}}>
                                                        <p style={{textAlign: 'center', margin: 0}}>
                                                            <img width={90} src="https://brandongaille.com/wp-content/uploads/2013/07/Vans-Company-Logo.jpg" style={{maxWidth: '90px'}} />
                                                        </p>
                                                    </td>
                                                </tr>
                                                {/* offset */}
                                                <tr>
                                                    <td height={15} />
                                                </tr>
                                                {/* socials */}
                                                <tr>
                                                    <td style={{textAlign: 'center'}}>
                                                        <table cellPadding={0} cellSpacing={0} style={{verticalAlign: '-webkit-baseline-middle', fontSize: 'medium', fontFamily: 'Arial', display: 'inline-block'}}>
                                                            <tbody>
                                                            <tr style={{textAlign: 'center'}}>
                                                                <td>
                                                                    <a href="#" color="#6A78D1" style={{display: 'inline-block', padding: '0px', backgroundColor: '#5470BA'}}>
                                                                        <img height={24} src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/facebook-icon-2x.png" alt="facebook" color="#6A78D1" style={{backgroundColor: '#5470BA', maxWidth: '135px', display: 'block'}} />
                                                                    </a>
                                                                </td>
                                                                <td width={8}>
                                                                    <div />
                                                                </td>
                                                                <td>
                                                                    <a href="#" color="#6A78D1" style={{display: 'inline-block', padding: '0px', backgroundColor: '#5470BA'}}>
                                                                        <img height={24} src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/twitter-icon-2x.png" alt="twitter" color="#6A78D1" style={{backgroundColor: '#5470BA', maxWidth: '135px', display: 'block'}} />
                                                                    </a>
                                                                </td>
                                                                <td width={8}>
                                                                    <div />
                                                                </td>
                                                                <td>
                                                                    <a href="#" color="#6A78D1" style={{display: 'inline-block', padding: '0px', backgroundColor: '#5470BA'}}>
                                                                        <img height={24} src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/linkedin-icon-2x.png" alt="linkedin" color="#6A78D1" style={{backgroundColor: '#5470BA', maxWidth: '135px', display: 'block'}} />
                                                                    </a>
                                                                </td>
                                                                <td width={8}>
                                                                    <div />
                                                                </td>
                                                                <td>
                                                                    <a href="#" color="#6A78D1" style={{display: 'inline-block', padding: '0px', backgroundColor: '#5470BA'}}>
                                                                        <img height={24} src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/instagram-icon-2x.png" alt="instagram" color="#6A78D1" style={{backgroundColor: '#5470BA', maxWidth: '135px', display: 'block'}} />
                                                                    </a>
                                                                </td>
                                                                <td width={8}>
                                                                    <div />
                                                                </td>
                                                            </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                    {/* second column (offset) */}
                                    <td width={5} style={{borderRight: 'solid 1px #FCA54B'}}>
                                    </td>
                                    <td width={25}>
                                    </td>
                                    {/* third column */}
                                    <td style={{padding: '0px', verticalAlign: 'top'}}>
                                        <table>
                                            <tbody>
                                                <tr>
                                                    {/* Name of user */}
                                                    <td>
                                                        <h3 color="#000" style={{margin: '0px', fontSize: '20px', color: '#000', paddingRight: '8px'}}>
                                                            <span>Rad</span><span>&nbsp;</span><span>Pozniakov</span></h3>
                                                    </td>
                                                    {/* divider */}
                                                    <td>
                                                        <div style={{height: '14px', width: '2px', borderLeft: 'solid 1px #000'}} />
                                                    </td>
                                                    {/* user position */}
                                                    <td>
                                                        <p color="#000" style={{margin: '0px', fontSize: '16px', lineHeight: '24px', color: '#262626', paddingLeft: '8px'}}>
                                                            <span>Sales &amp; Marketing Director</span>
                                                        </p>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <table>
                                            <tbody>
                                                <tr>
                                                    {/* Name of user */}
                                                    <td>
                                                        <p color="#979797" style={{margin: '0px', fontSize: '14px', color: '#979797', paddingRight: '4px'}}>
                                                            <span>Finty</span><span>&nbsp;</span></p>
                                                    </td>
                                                    {/* divider */}
                                                    <td>
                                                        <div style={{height: '14px', width: '2px', borderLeft: 'solid 1px #979797'}} />
                                                    </td>
                                                    {/* user position */}
                                                    <td>
                                                        <p color="#979797" style={{margin: '0px', fontSize: '14px', color: '#979797', paddingLeft: '4px'}}>
                                                            <span>Sales department</span>
                                                        </p>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <table cellPadding={0} cellSpacing={0} style={{verticalAlign: '-webkit-baseline-middle', fontSize: 'medium', fontFamily: 'Arial'}}>
                                            <tbody>
                                                <tr>
                                                    <td height={8} />
                                                </tr>
                                                {/* address */}
                                                <tr height={25} style={{verticalAlign: 'middle'}}>
                                                    <td width={30} style={{verticalAlign: 'middle'}}>
                                                        <table cellPadding={0} cellSpacing={0} style={{verticalAlign: '-webkit-baseline-middle', fontSize: 'medium', fontFamily: 'Arial'}}>
                                                            <tbody>
                                                            <tr>
                                                                <td style={{verticalAlign: 'bottom'}}>
                                                  <span width={11} color="rgb(252,165,75)" style={{display: 'block', backgroundColor: 'rgb(252,165,75)'}}>
                                                    <img width={13} src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/address-icon-2x.png" color="rgb(252,165,75)" style={{display: 'block', backgroundColor: 'rgb(252,165,75)'}} />
                                                  </span>
                                                                </td>
                                                            </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                    <td style={{padding: '0px', color: 'rgb(239, 43, 43)'}}>
                                                        <p color="#262626" style={{margin: 0, textDecoration: 'none', color: '#262626', fontSize: '12px'}}>
                                                            <span>Address 1</span>,
                                                            <span>Address 2</span>,
                                                            <span>Address 3</span>,
                                                            <span>Address 4</span>
                                                        </p>
                                                    </td>
                                                </tr>
                                                {/* phone */}
                                                <tr height={25} style={{verticalAlign: 'middle'}}>
                                                    <td width={30} style={{verticalAlign: 'middle'}}>
                                                        <table cellPadding={0} cellSpacing={0} style={{verticalAlign: '-webkit-baseline-middle', fontSize: 'medium', fontFamily: 'Arial'}}>
                                                            <tbody>
                                                            <tr>
                                                                <td style={{verticalAlign: 'bottom'}}>
                                                  <span width={11} color="rgb(252,165,75)" style={{display: 'block', backgroundColor: 'rgb(252,165,75)'}}>
                                                    <img width={13} src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/phone-icon-2x.png" color="rgb(252,165,75)" style={{display: 'block', backgroundColor: 'rgb(252,165,75)'}} />
                                                  </span>
                                                                </td>
                                                            </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                    <td style={{padding: '0px', color: 'rgb(239, 43, 43)'}}>
                                                        <table>
                                                            <tbody>
                                                            <tr>
                                                                <td>
                                                                    <p color="#262626" style={{margin: 0, textDecoration: 'none', color: '#262626', fontSize: '12px', paddingRight: '5px'}}>
                                                                        <span>111 222 3333</span>
                                                                    </p>
                                                                </td>
                                                                <td>
                                                                    <div style={{height: '14px', width: '2px', borderLeft: 'solid 1px #262626'}} />
                                                                </td>
                                                                <td>
                                                                    <p color="#262626" style={{margin: 0, textDecoration: 'none', color: '#262626', fontSize: '12px', paddingLeft: '5px'}}>
                                                                        <span>111 222 3333</span>
                                                                    </p>
                                                                </td>
                                                            </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                                {/* email */}
                                                <tr height={25} style={{verticalAlign: 'middle'}}>
                                                    <td width={30} style={{verticalAlign: 'middle'}}>
                                                        <table cellPadding={0} cellSpacing={0} style={{verticalAlign: '-webkit-baseline-middle', fontSize: 'medium', fontFamily: 'Arial'}}>
                                                            <tbody>
                                                            <tr>
                                                                <td style={{verticalAlign: 'bottom'}}>
                                                  <span width={11} color="rgb(252,165,75)" style={{display: 'block', backgroundColor: 'rgb(252,165,75)'}}>
                                                    <img width={13} src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/email-icon-2x.png" color="rgb(252,165,75)" style={{display: 'block', backgroundColor: 'rgb(252,165,75)'}} />
                                                  </span>
                                                                </td>
                                                            </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                    <td style={{padding: '0px', color: 'rgb(239, 43, 43)'}}>
                                                        <a href="#" color="#FA6400" style={{textDecoration: 'none', color: '#FA6400', fontSize: '12px'}}>
                                                            <span>john@smith.com</span>
                                                        </a>
                                                    </td>
                                                </tr>
                                                {/*  link  */}
                                                <tr height={25} style={{verticalAlign: 'middle'}}>
                                                    <td width={30} style={{verticalAlign: 'middle'}}>
                                                        <table cellPadding={0} cellSpacing={0} style={{verticalAlign: '-webkit-baseline-middle', fontSize: 'medium', fontFamily: 'Arial'}}>
                                                            <tbody>
                                                            <tr>
                                                                <td style={{verticalAlign: 'bottom'}}>
                                                  <span width={11} color="rgb(252,165,75)" style={{display: 'block', backgroundColor: 'rgb(252,165,75)'}}>
                                                    <img width={13} src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/link-icon-2x.png" color="rgb(252,165,75)" style={{display: 'block', backgroundColor: 'rgb(252,165,75)'}} />
                                                  </span>
                                                                </td>
                                                            </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                    <td style={{padding: '0px', color: 'rgb(239, 43, 43)'}}>
                                                        <a href="#" color="#FA6400" style={{textDecoration: 'none', color: '#FA6400', fontSize: '12px'}}>
                                                            <span>www.hubspot.com</span>
                                                        </a>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

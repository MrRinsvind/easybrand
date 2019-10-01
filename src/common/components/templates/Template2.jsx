import React from 'react'

export default function Template2(props) {
    return (
        <table id="template2" cellPadding={0} cellSpacing={0} style={{verticalAlign: '-webkit-baseline-middle', fontSize: 'medium', fontFamily: 'Arial'}}>
            <tbody>
                <tr>
                    <td>
                        <table cellPadding={0} cellSpacing={0} style={{verticalAlign: '-webkit-baseline-middle', fontSize: 'medium', fontFamily: 'Arial'}}>
                            <tbody>
                            <tr>
                                {/* first column */}
                                <td style={{verticalAlign: 'top'}}>
                                    <table cellPadding={0} cellSpacing={0} style={{verticalAlign: '-webkit-baseline-middle', fontSize: 'medium', fontFamily: 'Arial'}}>
                                        <tbody>
                                        {/* profile image */}
                                        <tr>
                                            <td style={{textAlign: 'center'}}>
                                                <img width={90} src="https://avatarfiles.alphacoders.com/203/203431.jpg" style={{maxWidth: '90px', display: 'block'}} />
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </td>
                                {/* second column (offset) */}
                                <td width="20px" />
                                {/* third column */}
                                <td style={{padding: '0px', verticalAlign: 'top'}}>
                                    <table style={{width: '100%'}}>
                                        <tbody><tr>
                                            <td>
                                                <table>
                                                    <tbody>
                                                    <tr>
                                                        <td>
                                                            <h3 color="#000" style={{margin: '0px', fontSize: '20px', color: '#000', paddingRight: '8px'}}>
                                                                <span>Rad</span><span>&nbsp;</span><span>Pozniakov</span></h3>
                                                        </td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                                {/* Company */}
                                                <table>
                                                    <tbody>
                                                    <tr>
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
                                                {/* Position */}
                                                <table>
                                                    <tbody>
                                                    <tr>
                                                        <td>
                                                            <p color="#000" style={{margin: '0px', fontSize: '16px', lineHeight: '24px', color: '#262626'}}>
                                                                <span>Sales &amp; Marketing Director</span>
                                                            </p>
                                                        </td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                            <td style={{textAlign: 'center', verticalAlign: 'bottom'}}>
                                                <img width={90} src="https://brandongaille.com/wp-content/uploads/2013/07/Vans-Company-Logo.jpg" style={{maxWidth: '90px', float: 'right', display: 'block'}} />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{height: '16px'}} />
                                        </tr>
                                        </tbody></table>
                                    {/*  Content  */}
                                    <table cellPadding={0} cellSpacing={0} style={{verticalAlign: '-webkit-baseline-middle', fontSize: 'medium', fontFamily: 'Arial', borderTop: 'solid 1px #FCA54B'}}>
                                        <tbody>
                                        <tr>
                                            <td style={{height: '16px'}} />
                                        </tr>
                                        <tr>
                                            <td>
                                                <table>
                                                    <tbody>
                                                    <tr><td>
                                                        <table>
                                                            <tbody>
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
                                                                                <a href="tel:+38097762565" color="#262626" style={{textDecoration: 'none', color: '#262626', fontSize: '12px', paddingRight: '5px'}}>
                                                                                    <span>111 222 3333</span>
                                                                                </a>
                                                                            </td>
                                                                            <td>
                                                                                <div style={{height: '14px', width: '2px', borderLeft: 'solid 1px #262626'}} />
                                                                            </td>
                                                                            <td>
                                                                                <a href="tel:+38097762565" color="#262626" style={{textDecoration: 'none', color: '#262626', fontSize: '12px', paddingLeft: '5px'}}>
                                                                                    <span>111 222 3333</span>
                                                                                </a>
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
                                                            <tr>
                                                                <td height="4px" />
                                                            </tr>
                                                            {/* socials */}
                                                            <tr>
                                                            </tr></tbody></table><table cellPadding={0} cellSpacing={0} style={{verticalAlign: '-webkit-baseline-middle', fontSize: 'medium', fontFamily: 'Arial'}}>
                                                        <tbody>
                                                        <tr><td>
                                                            <a href="#" color="#6A78D1" style={{display: 'inline-block', padding: '0px', backgroundColor: '#5470BA'}}>
                                                                <img height={24} src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/facebook-icon-2x.png" alt="facebook" color="#6A78D1" style={{backgroundColor: '#5470BA', maxWidth: '135px', display: 'block'}} />
                                                            </a>
                                                        </td>
                                                            <td width={8} />
                                                            <td>
                                                                <a href="#" color="#6A78D1" style={{display: 'inline-block', padding: '0px', backgroundColor: '#5470BA'}}>
                                                                    <img height={24} src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/twitter-icon-2x.png" alt="twitter" color="#6A78D1" style={{backgroundColor: '#5470BA', maxWidth: '135px', display: 'block'}} />
                                                                </a>
                                                            </td>
                                                            <td width={8} />
                                                            <td>
                                                                <a href="#" color="#6A78D1" style={{display: 'inline-block', padding: '0px', backgroundColor: '#5470BA'}}>
                                                                    <img height={24} src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/linkedin-icon-2x.png" alt="linkedin" color="#6A78D1" style={{backgroundColor: '#5470BA', maxWidth: '135px', display: 'block'}} />
                                                                </a>
                                                            </td>
                                                            <td width={8} />
                                                            <td>
                                                                <a href="#" color="#6A78D1" style={{display: 'inline-block', padding: '0px', backgroundColor: '#5470BA'}}>
                                                                    <img height={24} src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/instagram-icon-2x.png" alt="instagram" color="#6A78D1" style={{backgroundColor: '#5470BA', maxWidth: '135px', display: 'block'}} />
                                                                </a>
                                                            </td>
                                                        </tr></tbody>
                                                    </table>
                                                    </td></tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                            <td width="30px">
                                            </td>
                                            <td style={{verticalAlign: 'top'}}>
                                                <table>
                                                    <tbody>
                                                    {/* address */}
                                                    <tr height={25}>
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
                                                            <div color="#262626" style={{textDecoration: 'none', color: '#262626', fontSize: '12px'}}>
                                                                <span>Address 1</span>,
                                                                <span>Address 2</span>,
                                                                <div style={{height: '4px'}} />
                                                                <span>Address 3</span>,
                                                                <span>Address 4</span>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    {/*  link  */}
                                                    <tr height={25}>
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
                                        </tr></tbody>
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

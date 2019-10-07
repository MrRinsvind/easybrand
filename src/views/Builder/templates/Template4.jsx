import React from 'react'

import { TransformFontSize } from 'common/utils/helpers'

export default function Template4({data}) {
    return (
        <table id="template4" cellPadding={0} cellSpacing={0} style={{
            verticalAlign: '-webkit-baseline-middle',
            fontSize: 'small',
            fontFamily: 'Arial',
            width: `${TransformFontSize(525, data.fontSize)}`
        }}>
            <tbody>
            <tr>
                <td style={{verticalAlign: 'middle'}}>
                    <table cellPadding={0} cellSpacing={0}
                           style={{verticalAlign: '-webkit-baseline-middle', fontSize: 'small', fontFamily: 'Arial'}}>
                        <tbody>
                        <tr>
                            {data.profilePhoto && (
                                <>
                                    <td style={{verticalAlign: 'top'}}>
                                        <table cellPadding={0} cellSpacing={0} style={{
                                            verticalAlign: '-webkit-baseline-middle',
                                            fontSize: 'small',
                                            fontFamily: 'Arial',
                                            width: '100%'
                                        }}>
                                            <tbody>
                                            <tr height={`${TransformFontSize(5, data.fontSize)}`}/>
                                            <tr>
                                                <td style={{textAlign: 'center'}}>
                                                    <img width={`${TransformFontSize(90, data.fontSize)}`} src={data.profilePhoto}/>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                    <td width={`${TransformFontSize(29, data.fontSize)}`}>
                                        <div/>
                                    </td>
                                </>
                            )}

                            <td width={`${TransformFontSize(180, data.fontSize)}`} style={{verticalAlign: 'top'}}>
                                <table cellPadding={0} cellSpacing={0} style={{
                                    verticalAlign: '-webkit-baseline-middle',
                                    fontSize: 'small',
                                    fontFamily: 'Arial',
                                    width: '100%'
                                }}>
                                    <tbody>
                                    <tr height={`${TransformFontSize(10, data.fontSize)}`}/>

                                    {(data.firstName || data.lastName) && (
                                        <tr>
                                            <td style={{textAlign: 'left'}}>
                                                <h2 color={data.colors.textColor} style={{
                                                    margin: `0px 0px ${TransformFontSize(5, data.fontSize)}`,
                                                    fontSize: `${TransformFontSize(20, data.fontSize)}`,
                                                    color: `${data.colors.textColor}`
                                                }}>
                                                    <span>{`${data.firstName} ${data.lastName}`}</span>
                                                </h2>
                                            </td>
                                        </tr>
                                    )}

                                    {data.jobTitle && (
                                        <>
                                            <tr>
                                                <td>
                                                    <p color={data.colors.textColor} style={{
                                                        margin: `0px 0px ${TransformFontSize(5, data.fontSize)}`,
                                                        fontSize: `${TransformFontSize(14, data.fontSize)}`,
                                                        color: `${data.colors.textColor}`
                                                    }}>
                                                        <span>{data.jobTitle}</span>
                                                    </p>
                                                </td>
                                            </tr>
                                            <tr height={`${TransformFontSize(5, data.fontSize)}`}></tr>
                                        </>

                                    )}
                                    {(data.companyName || data.department) && (
                                        <tr>
                                            <td>
                                                <p color={data.colors.textColor} style={{
                                                    margin: '0px',
                                                    fontSize: `${TransformFontSize(14, data.fontSize)}`,
                                                    color: `${data.colors.textColor}`,
                                                    opacity: 0.5
                                                }}>
                                                    {data.companyName && (
                                                        <>
                                                            <span>{data.companyName}</span>
                                                            {data.department && (
                                                                <span style={{padding: `0 ${TransformFontSize(8, data.fontSize)}`}}>|</span>
                                                            )}
                                                        </>
                                                    )}
                                                    {data.department && (
                                                        <span>{data.department}</span>
                                                    )}
                                                </p>
                                            </td>
                                        </tr>
                                    )}
                                    </tbody>
                                </table>
                            </td>
                            <td width={`${TransformFontSize(20, data.fontSize)}`}>
                                <div/>
                            </td>
                            <td width={`${TransformFontSize(190, data.fontSize)}`} style={{verticalAlign: 'top'}}>
                                <table cellPadding={0} cellSpacing={0} style={{
                                    verticalAlign: '-webkit-baseline-middle',
                                    fontSize: 'small',
                                    fontFamily: 'Arial'
                                }}>
                                    <tbody>
                                    <tr height={`${TransformFontSize(10, data.fontSize)}`}/>
                                    {data.addresses.length > 0 && (
                                        <tr height={`${TransformFontSize(25, data.fontSize)}`} style={{verticalAlign: 'middle'}}>
                                            <td width={`${TransformFontSize(30, data.fontSize)}`} style={{verticalAlign: 'top'}}>
                                                <table cellPadding={0} cellSpacing={0} style={{
                                                    verticalAlign: '-webkit-baseline-middle',
                                                    fontSize: 'small',
                                                    fontFamily: 'Arial'
                                                }}>
                                                    <tbody>
                                                    <tr>
                                                        <td style={{verticalAlign: 'bottom'}}>
                                                            <img width={`${TransformFontSize(13, data.fontSize)}`}
                                                                 src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/address-icon-2x.png"
                                                                 color={data.colors.themeColor} style={{
                                                                display: 'block',
                                                                backgroundColor: `${data.colors.themeColor}`
                                                            }}/>
                                                        </td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                            <td style={{padding: '0px'}}>
                                                <p color={data.colors.textColor} style={{
                                                    fontSize: `${TransformFontSize(12, data.fontSize)}`,
                                                    padding: 0,
                                                    margin: 0,
                                                    color: `${data.colors.textColor}`
                                                }}>
                                                    {data.addresses && !!data.addresses.length && data.addresses.map((address, id) => {
                                                        const prefix = id + 1 !== data.addresses.length ? ', ' : ''
                                                        return <><span>{address}</span>{prefix}</>
                                                    })}
                                                </p>
                                            </td>
                                        </tr>
                                    )}

                                    {(data.officeNumber || data.mobileNumber) && (
                                        <tr height={`${TransformFontSize(25, data.fontSize)}`} style={{verticalAlign: 'middle'}}>
                                            <td width={`${TransformFontSize(30, data.fontSize)}`} style={{verticalAlign: 'middle'}}>
                                                <table cellPadding={0} cellSpacing={0} style={{
                                                    verticalAlign: '-webkit-baseline-middle',
                                                    fontSize: 'small',
                                                    fontFamily: 'Arial'
                                                }}>
                                                    <tbody>
                                                    <tr>
                                                        <td style={{verticalAlign: 'bottom'}}>

                                                                <img width={`${TransformFontSize(13, data.fontSize)}`}
                                                                     src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/phone-icon-2x.png"
                                                                     color={data.colors.themeColor} style={{
                                                                    display: 'block',
                                                                    backgroundColor: `${data.colors.themeColor}`
                                                                }}/>
                                                        </td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                            <td style={{padding: '0px', color: 'rgb(0, 0, 0)'}}>
                                                <p style={{padding: `${TransformFontSize(10, data.fontSize)} 0`, margin: '0'}}>
                                                    {data.officeNumber && (
                                                        <>
                                                            <a href={`tel:${data.officeNumber}`}
                                                               color={data.colors.linkColor} style={{
                                                                textDecoration: 'none',
                                                                color: `${data.colors.linkColor}`,
                                                                fontSize: `${TransformFontSize(12, data.fontSize)}`
                                                            }}>
                                                                {data.officeNumber}
                                                            </a>
                                                            {data.mobileNumber && (
                                                                <span style={{
                                                                    padding: `0 ${TransformFontSize(8, data.fontSize)}`,
                                                                    color: `${data.colors.linkColor}`
                                                                }}>|</span>
                                                            )}
                                                        </>
                                                    )}
                                                    {data.mobileNumber && (
                                                        <a href={`tel:${data.mobileNumber}`}
                                                           color={data.colors.linkColor} style={{
                                                            textDecoration: 'none',
                                                            color: `${data.colors.linkColor}`,
                                                            fontSize: `${TransformFontSize(12, data.fontSize)}`
                                                        }}>
                                                            <span>{data.mobileNumber}</span>
                                                        </a>
                                                    )}
                                                </p>
                                            </td>
                                        </tr>
                                    )}

                                    {data.email && (
                                        <tr height={`${TransformFontSize(25, data.fontSize)}`} style={{verticalAlign: 'middle'}}>
                                            <td width={`${TransformFontSize(30, data.fontSize)}`} style={{verticalAlign: 'middle'}}>
                                                <table cellPadding={0} cellSpacing={0} style={{
                                                    verticalAlign: '-webkit-baseline-middle',
                                                    fontSize: 'small',
                                                    fontFamily: 'Arial'
                                                }}>
                                                    <tbody>
                                                    <tr>
                                                        <td style={{verticalAlign: 'bottom'}}>
                                                                <img width={`${TransformFontSize(13, data.fontSize)}`}
                                                                     src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/email-icon-2x.png"
                                                                     color={data.colors.themeColor} style={{
                                                                    display: 'block',
                                                                    backgroundColor: `${data.colors.themeColor}`
                                                                }}/>
                                                        </td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                            <td style={{padding: '0px'}}>
                                                <a href={`mailto:${data.email}`} color={data.colors.linkColor} style={{
                                                    textDecoration: 'none',
                                                    color: `${data.colors.linkColor}`,
                                                    fontSize: `${TransformFontSize(12, data.fontSize)}`
                                                }}>
                                                    <span>{data.email}</span>
                                                </a>
                                            </td>
                                        </tr>
                                    )}

                                    {data.websiteUrl && (
                                        <tr height={`${TransformFontSize(25, data.fontSize)}`} style={{verticalAlign: 'middle'}}>
                                            <td width={`${TransformFontSize(30, data.fontSize)}`} style={{verticalAlign: 'middle'}}>
                                                <table cellPadding={0} cellSpacing={0} style={{
                                                    verticalAlign: '-webkit-baseline-middle',
                                                    fontSize: 'small',
                                                    fontFamily: 'Arial'
                                                }}>
                                                    <tbody>
                                                    <tr>
                                                        <td style={{verticalAlign: 'bottom'}}>
                                                                <img width={`${TransformFontSize(13, data.fontSize)}`}
                                                                     src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/link-icon-2x.png"
                                                                     color={data.colors.themeColor} style={{
                                                                    display: 'block',
                                                                    backgroundColor: `${data.colors.themeColor}`
                                                                }}/>
                                                        </td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                            <td style={{padding: '0px'}}>
                                                <a href={data.websiteUrl} color={data.colors.linkColor} style={{
                                                    textDecoration: 'none',
                                                    color: `${data.colors.linkColor}`,
                                                    fontSize: `${TransformFontSize(12, data.fontSize)}`
                                                }}>
                                                    <span>{data.websiteUrl}</span>
                                                </a>
                                            </td>
                                        </tr>
                                    )}
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
            <tr>
                <td height={`${TransformFontSize(10, data.fontSize)}`}/>
            </tr>
            <tr>
                <td height={`${TransformFontSize(2, data.fontSize)}`} color={data.colors.themeColor} direction="horizontal" style={{
                    width: '100%',
                    borderBottom: `1px solid ${data.colors.themeColor}`,
                    borderLeft: 'none',
                    display: 'block'
                }}/>
            </tr>
            <tr>
                <td height={`${TransformFontSize(8, data.fontSize)}`}/>
            </tr>
            <tr>
                <td>
                    <table cellPadding={0} cellSpacing={0} style={{
                        verticalAlign: '-webkit-baseline-middle',
                        fontSize: 'small',
                        fontFamily: 'Arial',
                        width: '100%'
                    }}>
                        <tbody>
                        <tr>
                            <td style={{verticalAlign: 'middle', textAlign: 'left'}}>
                                <table cellPadding={0} cellSpacing={0} style={{
                                    verticalAlign: '-webkit-baseline-middle',
                                    fontSize: 'small',
                                    fontFamily: 'Arial',
                                    display: 'inline-block'
                                }}>
                                    <tbody>
                                    <tr style={{textAlign: 'right'}}>
                                        <td>
                                            {data.socialLinks.facebook && (
                                                <>
                                                    <a href={data.socialLinks.facebook} color="#6A78D1" style={{
                                                        display: 'inline-block',
                                                        padding: '0px',
                                                        backgroundColor: `${data.colors.themeColor}`
                                                    }}>
                                                        <img height={`${TransformFontSize(24, data.fontSize)}`}
                                                             src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/facebook-icon-2x.png"
                                                             alt="facebook" color={data.colors.themeColor} style={{
                                                            backgroundColor: `${data.colors.themeColor}`,
                                                            maxWidth: `${TransformFontSize(135, data.fontSize)}`,
                                                            display: 'block'
                                                        }}/>
                                                    </a>
                                                    <span style={{width: `${TransformFontSize(8, data.fontSize)}`, display: 'inline-block'}}></span>
                                                </>
                                            )}
                                        </td>
                                        <td>
                                            {data.socialLinks.twitter && (
                                                <>
                                                    <a href={data.socialLinks.twitter} color="#6A78D1" style={{
                                                        display: 'inline-block',
                                                        padding: '0px',
                                                        backgroundColor: `${data.colors.themeColor}`
                                                    }}>
                                                        <img height={`${TransformFontSize(24, data.fontSize)}`}
                                                             src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/twitter-icon-2x.png"
                                                             alt="twitter" color={data.colors.themeColor} style={{
                                                            backgroundColor: `${data.colors.themeColor}`,
                                                            maxWidth: `${TransformFontSize(135, data.fontSize)}`,
                                                            display: 'block'
                                                        }}/>
                                                    </a>
                                                    <span style={{width: `${TransformFontSize(8, data.fontSize)}`, display: 'inline-block'}}></span>
                                                </>
                                            )}
                                        </td>
                                        <td>
                                            {data.socialLinks.linkedin && (
                                                <>
                                                    <a href={data.socialLinks.linkedin} color="#6A78D1" style={{
                                                        display: 'inline-block',
                                                        padding: '0px',
                                                        backgroundColor: `${data.colors.themeColor}`
                                                    }}>
                                                        <img height={`${TransformFontSize(24, data.fontSize)}`}
                                                             src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/linkedin-icon-2x.png"
                                                             alt="linkedin" color={data.colors.themeColor} style={{
                                                            backgroundColor: `${data.colors.themeColor}`,
                                                            maxWidth: `${TransformFontSize(135, data.fontSize)}`,
                                                            display: 'block'
                                                        }}/>
                                                    </a>
                                                    <span style={{width: `${TransformFontSize(8, data.fontSize)}`, display: 'inline-block'}}></span>
                                                </>
                                            )}
                                        </td>
                                        <td>
                                            {data.socialLinks.instagram && (
                                                <a href={data.socialLinks.instagram} color="#6A78D1" style={{
                                                    display: 'inline-block',
                                                    padding: '0px',
                                                    backgroundColor: `${data.colors.themeColor}`
                                                }}>
                                                    <img height={`${TransformFontSize(24, data.fontSize)}`}
                                                         src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/instagram-icon-2x.png"
                                                         alt="instagram" color={data.colors.themeColor} style={{
                                                        backgroundColor: `${data.colors.themeColor}`,
                                                        maxWidth: `${TransformFontSize(135, data.fontSize)}`,
                                                        display: 'block'
                                                    }}/>
                                                </a>
                                            )}
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </td>

                            {data.profilePhoto && (
                                <td style={{verticalAlign: 'top', textAlign: 'right'}}>
                                    <img width={`${TransformFontSize(90, data.fontSize)}`} src={data.companyLogo} role="presentation"
                                         style={{maxWidth: `${TransformFontSize(90, data.fontSize)}`, display: 'inline', textAlign: 'left'}}/>
                                </td>
                            )}

                        </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
            <tr>
                <td height={`${TransformFontSize(30, data.fontSize)}`}/>
            </tr>
            </tbody>
        </table>
    )
}

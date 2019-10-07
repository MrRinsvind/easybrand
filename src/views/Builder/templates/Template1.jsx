import React from 'react'

import { TransformFontSize } from 'common/utils/helpers'

export default function Template1({data}) {
    return (
        <table id="template1" cellPadding={0} cellSpacing={0}
               style={{verticalAlign: '-webkit-baseline-middle', fontFamily: 'Arial'}}>
            <tbody>
            <tr>
                <td>
                    <table cellPadding={0} cellSpacing={0}
                           style={{verticalAlign: '-webkit-baseline-middle', fontSize: 'medium', fontFamily: 'Arial'}}>
                        <tbody>
                        <tr>
                            {data.profilePhoto || data.companyLogo || data.socialLinks.facebook || data.socialLinks.twitter || data.socialLinks.instagram || data.socialLinks.linkedin ? (
                                <>
                                    <td style={{verticalAlign: 'top'}}>
                                        <table cellPadding={0} cellSpacing={0} style={{
                                            verticalAlign: '-webkit-baseline-middle',
                                            fontSize: 'medium',
                                            fontFamily: 'Arial',
                                            width: `${TransformFontSize(180, data.fontSize)}`
                                        }}>
                                            <tbody>
                                            {data.profilePhoto && (
                                                <>
                                                    <tr>
                                                        <td style={{textAlign: 'center'}}>
                                                            <p style={{textAlign: 'center', margin: 0}}>
                                                                <img src={data.profilePhoto}
                                                                     style={{maxWidth: `${TransformFontSize(90, data.fontSize)}`}}/>
                                                            </p>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td height={`${TransformFontSize(15, data.fontSize)}`}/>
                                                    </tr>
                                                </>
                                            )}

                                            {data.companyLogo && (
                                                <>
                                                    <tr>
                                                        <td style={{textAlign: 'center'}}>
                                                            <p style={{textAlign: 'center', margin: 0}}>
                                                                <img width={`${TransformFontSize(90, data.fontSize)}`}
                                                                     src={data.companyLogo}
                                                                     style={{maxWidth: `${TransformFontSize(90, data.fontSize)}`}}/>
                                                            </p>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td height={`${TransformFontSize(15, data.fontSize)}`}/>
                                                    </tr>
                                                </>
                                            )}

                                            <tr>
                                                <td style={{textAlign: 'center'}}>
                                                    <table cellPadding={0} cellSpacing={0} style={{
                                                        verticalAlign: '-webkit-baseline-middle',
                                                        fontSize: 'medium',
                                                        fontFamily: 'Arial',
                                                        display: 'inline-block'
                                                    }}>
                                                        <tbody>
                                                        <tr style={{textAlign: 'center'}}>
                                                            <td>
                                                                {data.socialLinks.facebook && (
                                                                    <>
                                                                        <a href={data.socialLinks.facebook}
                                                                           color={data.colors.themeColor} style={{
                                                                            display: 'inline-block',
                                                                            padding: '0px',
                                                                            backgroundColor: `${data.colors.themeColor}`
                                                                        }}>
                                                                            <img
                                                                                height={`${TransformFontSize(24, data.fontSize)}`}
                                                                                src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/facebook-icon-2x.png"
                                                                                alt="facebook" color="#6A78D1" style={{
                                                                                backgroundColor: `${data.colors.themeColor}`,
                                                                                maxWidth: `${TransformFontSize(135, data.fontSize)}`,
                                                                                display: 'block'
                                                                            }}/>
                                                                        </a>
                                                                        <span style={{
                                                                            width: `${TransformFontSize(8, data.fontSize)}`,
                                                                            display: 'inline-block'
                                                                        }}></span>
                                                                    </>
                                                                )}
                                                            </td>
                                                            <td>
                                                                {data.socialLinks.twitter && (
                                                                    <>
                                                                        <a href={data.socialLinks.twitter}
                                                                           color={data.colors.themeColor} style={{
                                                                            display: 'inline-block',
                                                                            padding: '0px',
                                                                            backgroundColor: `${data.colors.themeColor}`
                                                                        }}>
                                                                            <img
                                                                                height={`${TransformFontSize(24, data.fontSize)}`}
                                                                                src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/twitter-icon-2x.png"
                                                                                alt="twitter"
                                                                                color={data.colors.themeColor} style={{
                                                                                backgroundColor: `${data.colors.themeColor}`,
                                                                                maxWidth: `${TransformFontSize(135, data.fontSize)}`,
                                                                                display: 'block'
                                                                            }}/>
                                                                        </a>
                                                                        <span style={{
                                                                            width: `${TransformFontSize(8, data.fontSize)}`,
                                                                            display: 'inline-block'
                                                                        }}></span>
                                                                    </>
                                                                )}
                                                            </td>
                                                            <td>
                                                                {data.socialLinks.linkedin && (
                                                                    <>
                                                                        <a href={data.socialLinks.linkedin}
                                                                           color={data.colors.themeColor} style={{
                                                                            display: 'inline-block',
                                                                            padding: '0px',
                                                                            backgroundColor: `${data.colors.themeColor}`
                                                                        }}>
                                                                            <img
                                                                                height={`${TransformFontSize(24, data.fontSize)}`}
                                                                                src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/linkedin-icon-2x.png"
                                                                                alt="linkedin"
                                                                                color={data.colors.themeColor} style={{
                                                                                backgroundColor: `${data.colors.themeColor}`,
                                                                                maxWidth: `${TransformFontSize(135, data.fontSize)}`,
                                                                                display: 'block'
                                                                            }}/>
                                                                        </a>
                                                                        <span style={{
                                                                            width: `${TransformFontSize(8, data.fontSize)}`,
                                                                            display: 'inline-block'
                                                                        }}></span>
                                                                    </>
                                                                )}
                                                            </td>
                                                            <td>
                                                                {data.socialLinks.instagram && (
                                                                    <a href={data.socialLinks.instagram}
                                                                       color={data.colors.themeColor} style={{
                                                                        display: 'inline-block',
                                                                        padding: '0px',
                                                                        backgroundColor: `${data.colors.themeColor}`
                                                                    }}>
                                                                        <img
                                                                            height={`${TransformFontSize(24, data.fontSize)}`}
                                                                            src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/instagram-icon-2x.png"
                                                                            alt="instagram"
                                                                            color={data.colors.themeColor} style={{
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
                                            </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                    <td width={`${TransformFontSize(5, data.fontSize)}`}
                                        style={{borderRight: `solid 1px ${data.colors.themeColor}`}}>
                                    </td>
                                    <td width={`${TransformFontSize(25, data.fontSize)}`}>
                                    </td>
                                </>
                            ) : ""}
                            {/* third column */}
                            <td style={{padding: '0px', verticalAlign: 'top'}}>
                                <table cellPadding={0} cellSpacing={0}>
                                    <tbody>
                                    <tr>
                                        {data.firstName || data.lastName ? (
                                            <td>
                                                <p color={data.colors.textColor} style={{
                                                    margin: '0px',
                                                    fontSize: `${TransformFontSize(20, data.fontSize)}`,
                                                    fontWeight: "bold",
                                                    color: `${data.colors.textColor}`
                                                }}>
                                                    {`${data.firstName} ${data.lastName}`}
                                                </p>
                                            </td>
                                        ) : ""}

                                        {
                                            (data.firstName || data.lastName) && data.jobTitle && (
                                                <td>
                                                    <span style={{
                                                        fontSize: `${TransformFontSize(16, data.fontSize)}`,
                                                        fontWeight: 'lighter',
                                                        color: `${data.colors.textColor}`,
                                                        padding: `${TransformFontSize(10, data.fontSize)}`
                                                    }}> | </span>
                                                </td>
                                            )
                                        }

                                        {data.jobTitle && (
                                            <td>
                                                <p color={data.colors.textColor} style={{
                                                    margin: '0px',
                                                    fontSize: `${TransformFontSize(16, data.fontSize)}`,
                                                    lineHeight: `${TransformFontSize(24, data.fontSize)}`,
                                                    color: `${data.colors.textColor}`
                                                }}>
                                                    <span>{data.jobTitle}</span>
                                                </p>
                                            </td>
                                        )}
                                    </tr>
                                    <tr>
                                        <td>
                                            <div style={{height: `${TransformFontSize(8, data.fontSize)}`}}></div>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                                <table cellPadding={0} cellSpacing={0}>
                                    <tbody>
                                    <tr>
                                        {data.companyName && (
                                            <td>
                                                <p color={data.colors.textColor} style={{
                                                    margin: '0px',
                                                    fontSize: `${TransformFontSize(14, data.fontSize)}`,
                                                    color: `${data.colors.textColor}`,
                                                    paddingRight: `${TransformFontSize(4, data.fontSize)}`,
                                                    opacity: '0.5'
                                                }}>
                                                    <span>{data.companyName}</span>
                                                </p>
                                            </td>
                                        )}

                                        {data.companyName && data.department && (
                                            <td>
                                                <span style={{
                                                    padding: '0',
                                                    paddingLeft: `${TransformFontSize(8, data.fontSize)}`,
                                                    paddingRight: `${TransformFontSize(8, data.fontSize)}`,
                                                    fontWeight: '100',
                                                    fontSize: `${TransformFontSize(14, data.fontSize)}`,
                                                    color: `${data.colors.textColor}`,
                                                    opacity: '0.5'
                                                }}>|</span>
                                            </td>
                                        )}

                                        {data.department && (
                                            <td>
                                                <p color={data.colors.textColor} style={{
                                                    margin: '0px',
                                                    fontSize: `${TransformFontSize(14, data.fontSize)}`,
                                                    color: `${data.colors.textColor}`,
                                                    paddingLeft: `${TransformFontSize(4, data.fontSize)}`,
                                                    opacity: '0.5'
                                                }}>
                                                    <span>{data.department}</span>
                                                </p>
                                            </td>
                                        )}
                                    </tr>
                                    </tbody>
                                </table>
                                <table cellPadding={0} cellSpacing={0} style={{
                                    verticalAlign: '-webkit-baseline-middle',
                                    fontSize: 'medium',
                                    fontFamily: 'Arial'
                                }}>
                                    <tbody>
                                    <tr>
                                        <td height={`${TransformFontSize(8, data.fontSize)}`}/>
                                    </tr>
                                    {/* address */}
                                    {data.addresses.length > 0 && (
                                        <tr height={`${TransformFontSize(25, data.fontSize)}`}
                                            style={{verticalAlign: 'middle'}}>
                                            <td width={`${TransformFontSize(30, data.fontSize)}`}
                                                style={{verticalAlign: 'middle'}}>
                                                <table cellPadding={0} cellSpacing={0} style={{
                                                    verticalAlign: '-webkit-baseline-middle',
                                                    fontSize: 'medium',
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
                                                    margin: 0,
                                                    textDecoration: 'none',
                                                    color: `${data.colors.textColor}`,
                                                    fontSize: `${TransformFontSize(12, data.fontSize)}`
                                                }}>
                                                    {data.addresses && !!data.addresses.length && data.addresses.map((address, id) => {
                                                        const prefix = id + 1 !== data.addresses.length ? ', ' : ''
                                                        return <React.Fragment key={prefix+id}><span>{address}</span>{prefix}</React.Fragment>
                                                    })}
                                                </p>
                                            </td>
                                        </tr>
                                    )}
                                    {(data.mobileNumber || data.officeNumber) && (
                                        <tr height={`${TransformFontSize(25, data.fontSize)}`}
                                            style={{verticalAlign: 'middle'}}>
                                            <td width={`${TransformFontSize(30, data.fontSize)}`}
                                                style={{verticalAlign: 'middle'}}>
                                                <table cellPadding={0} cellSpacing={0} style={{
                                                    verticalAlign: '-webkit-baseline-middle',
                                                    fontSize: 'medium',
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
                                            <td style={{padding: '0px'}}>
                                                <table cellPadding={0} cellSpacing={0}>
                                                    <tbody>
                                                    <tr>
                                                        <td>
                                                            <p style={{
                                                                margin: 0,
                                                                padding: 0,
                                                                textDecoration: 'none',
                                                                fontSize: `${TransformFontSize(12, data.fontSize)}`,
                                                                paddingRight: `${TransformFontSize(5, data.fontSize)}`
                                                            }}>

                                                                {data.officeNumber && (
                                                                    <>
                                                                        <a href={`tel:${data.officeNumber}`}
                                                                           color={data.colors.linkColor} style={{
                                                                            textDecoration: 'none',
                                                                            color: `${data.colors.linkColor}`,
                                                                            fontSize: `${TransformFontSize(12, data.fontSize)}`
                                                                        }}>
                                                                            <span>{data.officeNumber}</span>
                                                                        </a>
                                                                        {data.mobileNumber && (
                                                                            <span style={{
                                                                                color: `${data.colors.linkColor}`,
                                                                                fontSize: `${TransformFontSize(12, data.fontSize)}`,
                                                                                padding: '0',
                                                                                paddingLeft: `${TransformFontSize(5, data.fontSize)}`,
                                                                                paddingRight: `${TransformFontSize(5, data.fontSize)}`,
                                                                            }}> | </span>
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
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    )}
                                    {/* email */}
                                    {data.email && (
                                        <tr height={`${TransformFontSize(25, data.fontSize)}`}
                                            style={{verticalAlign: 'middle'}}>
                                            <td width={`${TransformFontSize(30, data.fontSize)}`}
                                                style={{verticalAlign: 'middle'}}>
                                                <table cellPadding={0} cellSpacing={0} style={{
                                                    verticalAlign: '-webkit-baseline-middle',
                                                    fontSize: 'medium',
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
                                                <a href={`mailto:${data.email}`} color="#FA6400" style={{
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
                                        <tr height={`${TransformFontSize(25, data.fontSize)}`}
                                            style={{verticalAlign: 'middle'}}>
                                            <td width={`${TransformFontSize(30, data.fontSize)}`}
                                                style={{verticalAlign: 'middle'}}>
                                                <table cellPadding={0} cellSpacing={0} style={{
                                                    verticalAlign: '-webkit-baseline-middle',
                                                    fontSize: 'medium',
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
            </tbody>
        </table>
    )
}

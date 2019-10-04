import React from 'react'

export default function Template3({data}) {
    return (
        <table id="template3" cellPadding={0} cellSpacing={0} style={{
            verticalAlign: '-webkit-baseline-middle',
            fontSize: 'medium',
            fontFamily: 'Arial',
            width: '420px'
        }}>
            <tbody>
            <tr>
                <td>
                    {data.profilePhoto && (
                        <table cellPadding={0} cellSpacing={0} style={{
                            verticalAlign: '-webkit-baseline-middle',
                            fontSize: 'medium',
                            fontFamily: 'Arial',
                            width: '420px'
                        }}>
                            <tbody>
                            <tr>
                                <td>
                                    <p style={{textAlign: 'center', margin: 0}}>
                                        <img width="90px" src={data.profilePhoto}/>
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td style={{height: '10px'}}/>
                            </tr>
                            </tbody>
                        </table>
                    )}

                    {(data.firstName || data.lastName) && (
                        <table cellPadding={0} cellSpacing={0} style={{
                            verticalAlign: '-webkit-baseline-middle',
                            fontSize: 'medium',
                            fontFamily: 'Arial',
                            width: '420px'
                        }}>
                            <tbody>
                            <tr>
                                <td>
                                    <h2 style={{
                                        fontFamily: 'Arial, sans-serif',
                                        fontSize: '20px',
                                        color: `${data.colors.textColor}`,
                                        letterSpacing: 0,
                                        margin: 0,
                                        textAlign: 'center'
                                    }}>
                                        <span>{`${data.firstName} ${data.lastName}`}</span>
                                    </h2>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    )}

                    {data.jobTitle && (
                        <table cellPadding={0} cellSpacing={0} style={{
                            verticalAlign: '-webkit-baseline-middle',
                            fontSize: 'medium',
                            fontFamily: 'Arial',
                            width: '420px'
                        }}>
                            <tbody>
                            <tr>
                                <td>
                                    <p style={{
                                        fontFamily: 'Arial, sans-serif',
                                        fontSize: '14px',
                                        color: `${data.colors.textColor}`,
                                        letterSpacing: 0,
                                        margin: 0,
                                        textAlign: 'center',
                                        lineHeight: '24px'
                                    }}>
                                        {data.jobTitle}
                                    </p>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    )}

                    {(data.companyName || data.department) && (
                        <table cellPadding={0} cellSpacing={0} style={{
                            verticalAlign: '-webkit-baseline-middle',
                            fontSize: 'medium',
                            fontFamily: 'Arial',
                            width: '420px',
                            borderBottom: `solid 1px ${data.colors.themeColor}`
                        }}>
                            <tbody>
                            <tr>
                                <td>
                                    <p style={{
                                        fontFamily: 'Arial, sans-serif',
                                        fontSize: '14px',
                                        color: `${data.colors.textColor}`,
                                        margin: 0,
                                        letterSpacing: 0,
                                        textAlign: 'center',
                                        lineHeight: '24px',
                                        opacity: 0.5
                                    }}>
                                        {data.companyName && (
                                            <>
                                                <span>{data.companyName}</span>
                                                {data.department && (
                                                    <span style={{
                                                        padding: "0 8px",
                                                        color: `${data.colors.textColor}`
                                                    }}>|</span>
                                                )}
                                            </>
                                        )}
                                        <span style={{color: `${data.colors.textColor}`}}>{data.department}</span>
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td style={{height: '10px'}}/>
                            </tr>
                            </tbody>
                        </table>
                    )}

                    <table cellPadding={0} cellSpacing={0} style={{
                        verticalAlign: '-webkit-baseline-middle',
                        fontSize: 'medium',
                        fontFamily: 'Arial, sans-serif',
                        width: '420px'
                    }}>
                        <tbody>
                        <tr>
                            <td style={{height: '10px'}}/>
                        </tr>

                        {data.addresses.length > 0 && (
                            <>
                                <tr>
                                    <td style={{marginBottom: '10px'}}>
                                        <p style={{
                                            textAlign: 'center',
                                            margin: 0,
                                            fontSize: '12px',
                                            color: `${data.colors.textColor}`
                                        }}>
                                            <img width={13}
                                                 src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/address-icon-2x.png"
                                                 color="rgb(252,165,75)" style={{
                                                backgroundColor: `${data.colors.themeColor}`,
                                                marginRight: '10px'
                                            }}/>

                                            {data.addresses && !!data.addresses.length && data.addresses.map((address, id) => {
                                                const coma = id + 1 !== data.addresses.length ? ', ' : ''
                                                return <><span
                                                    style={{color: `${data.colors.textColor}`}}>{address}</span>{coma}</>
                                            })}
                                        </p>
                                    </td>
                                </tr>

                                <tr>
                                    <td style={{height: '10px'}}/>
                                </tr>
                            </>
                        )}

                        {(data.officeNumber || data.mobileNumber) && (
                            <>
                                <tr>
                                    <td style={{marginBottom: '10px'}}>
                                        <p style={{
                                            textAlign: 'center',
                                            margin: 0,
                                            fontSize: '12px',
                                            color: data.colors.linkColor
                                        }}>
                                            <img width={13}
                                                 src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/phone-icon-2x.png"
                                                 color={data.colors.themeColor} style={{
                                                backgroundColor: `${data.colors.themeColor}`,
                                                marginRight: '10px'
                                            }}/>
                                            {data.officeNumber && (
                                                <>
                                                    <a href={`tel:${data.officeNumber}`} color={data.colors.linkColor}
                                                       style={{
                                                           textDecoration: 'none',
                                                           color: `${data.colors.linkColor}`,
                                                           fontSize: '12px'
                                                       }}>
                                                        <span>{data.officeNumber}</span>
                                                    </a>
                                                    {data.mobileNumber && (
                                                        <span style={{
                                                            color: `${data.colors.linkColor}`,
                                                            fontSize: '12px',
                                                            padding: '0 5px'
                                                        }}> | </span>
                                                    )}
                                                </>
                                            )}
                                            {data.mobileNumber && (
                                                <a href={`tel:${data.mobileNumber}`} color={data.colors.linkColor}
                                                   style={{
                                                       textDecoration: 'none',
                                                       color: `${data.colors.linkColor}`,
                                                       fontSize: '12px'
                                                   }}>
                                                    <span>{data.mobileNumber}</span>
                                                </a>
                                            )}
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{height: '10px'}}/>
                                </tr>
                            </>
                        )}


                        {data.email && (
                            <>
                                <tr>
                                    <td style={{marginBottom: '10px'}}>
                                        <p style={{
                                            textAlign: 'center',
                                            margin: 0,
                                            fontSize: '12px',
                                            color: `${data.colors.linkColor}`
                                        }}>
                                            <img width={13}
                                                 src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/email-icon-2x.png"
                                                 color={data.colors.themeColor} style={{
                                                backgroundColor: `${data.colors.themeColor}`,
                                                marginRight: '10px'
                                            }}/>
                                            <a href="#" color={data.colors.linkColor} style={{
                                                textDecoration: 'none',
                                                color: `${data.colors.linkColor}`,
                                                fontSize: '12px'
                                            }}>
                                                <span>{data.email}</span>
                                            </a>
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{height: '10px'}}/>
                                </tr>
                            </>
                        )}

                        {data.websiteUrl && (
                            <>
                                <tr>
                                    <td style={{marginBottom: '10px'}}>
                                        <p style={{textAlign: 'center', margin: 0, fontSize: '12px', color: '#262626'}}>
                                            <img width={13}
                                                 src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/link-icon-2x.png"
                                                 color={data.colors.themeColor} style={{
                                                backgroundColor: `${data.colors.themeColor}`,
                                                marginRight: '10px'
                                            }}/>
                                            <a href="#" color={data.colors.linkColor} style={{
                                                textDecoration: 'none',
                                                color: `${data.colors.linkColor}`,
                                                fontSize: '12px'
                                            }}>
                                                <span>{data.websiteUrl}</span>
                                            </a>
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{height: '10px'}}/>
                                </tr>
                            </>
                        )}

                        {(data.socialLinks.facebook || data.socialLinks.twitter || data.socialLinks.instagram || data.socialLinks.linkedin) && (
                            <>
                                <tr>
                                    <td>
                                        <p style={{textAlign: 'center', margin: 0}}>
                                            {data.socialLinks.facebook && (
                                                <a style={{textDecoration: 'none', fontSize: 0, marginRight: '8px'}}
                                                   href={data.socialLinks.facebook}>
                                                    <img height={24}
                                                         src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/facebook-icon-2x.png"
                                                         alt="facebook" color="#5470BA"
                                                         style={{backgroundColor: `${data.colors.themeColor}`}}/>
                                                </a>
                                            )}

                                            {data.socialLinks.twitter && (
                                                <a style={{textDecoration: 'none', fontSize: 0, marginRight: '8px'}}
                                                   href={data.socialLinks.twitter}>
                                                    <img height={24}
                                                         src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/twitter-icon-2x.png"
                                                         alt="twitter" color="#5470BA"
                                                         style={{backgroundColor: `${data.colors.themeColor}`}}/>
                                                </a>
                                            )}

                                            {data.socialLinks.linkedin && (
                                                <a style={{textDecoration: 'none', fontSize: 0, marginRight: '8px'}}
                                                   href={data.socialLinks.linkedin}>
                                                    <img height={24}
                                                         src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/linkedin-icon-2x.png"
                                                         alt="linkedin" color="#5470BA"
                                                         style={{backgroundColor: `${data.colors.themeColor}`}}/>
                                                </a>
                                            )}

                                            {data.socialLinks.instagram && (
                                                <a style={{textDecoration: 'none', fontSize: 0}}
                                                   href={data.socialLinks.instagram}>
                                                    <img height={24}
                                                         src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/instagram-icon-2x.png"
                                                         alt="instagram" color="#5470BA"
                                                         style={{backgroundColor: `${data.colors.themeColor}`}}/>
                                                </a>
                                            )}

                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{height: '10px'}}/>
                                </tr>
                            </>
                        )}

                        {data.companyLogo && (
                            <tr>
                                <td>
                                    <p style={{margin: 0, textAlign: 'center'}}>
                                        <img width="90px" src={data.companyLogo}/>
                                    </p>
                                </td>
                            </tr>
                        )}

                        </tbody>
                    </table>
                </td>
            </tr>
            </tbody>
        </table>
    )
}

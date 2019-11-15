import yahoo_guide from 'assets/yahoo_guide.png'
import gmail_guide from 'assets/gmail_guide.png'
import apple_guide from 'assets/apple_guide.png'

export const DATA_GUIDE = [
    {
        title: "How do I add my new email signature to Gmail?",
        list: [
            "Log in to your Gmail account, then click the cog in the top right corner",
            "Select Settings from the drop down menu.",
            "Scroll down until you reach the email signature editor, then paste your new email signature there.",
            "Scroll to the bottom of the page and click 'save changes",
        ],
        img: gmail_guide
    },
    {
        title: "How do I add my new email signature to Protonmail?",
        list: [
            "Log in to your Gmail account, then click the cog in the top right corner.",
            "Select Settings from the drop down menu.",
            "Scroll down until you reach the email signature editor, then paste your new email signature there.",
            "Scroll to the bottom of the page and click 'save changes",
        ],
        img: gmail_guide
    },
    {
        title: "How do I add my new email signature to Outlook?",
        list: [
            "Log in to your Outlook account and select the Home Tab> New Email.",
            "Click the Message tab.",
            "In the Include group section, select Signature > Signatures.",
            "In the Choose Default Signature section, be sure to select the account you would like to associate with the signature from the e-mail account dropdown.",
            "In the Select Signature to Edit section, click the New button and name your signature.",
            "In the Edit Signature section, paste in your HubSpot generated signature and select OK.",
        ],
        img: null
    },
    {
        title: "How do I add my new email signature to Apple Mail?",
        list: [
            "Open the Mail application and log in to your account.",
            "Click Mail and then Preferences in the top left corner of your screen.",
            "From the preferences pop-up, click the Signatures tab.",
            "Click the + button at the bottom of the middle column.",
            "Paste your new email signature into the right-hand column and close the pop-up window to save.",
            "Paste your new email signature into the right-hand column and close the pop-up window to save.",

        ],
        img: apple_guide
    },
    {
        title: "How do I add my new email signature to Yahoo Mail?",
        list: [
            "Log in to your Yahoo Mail account and select Settings > More Settings.",
            "On the left side of the screen, select \"Writing email\" and then locate the Signature header.",
            "If you have multiple Yahoo Mail accounts, use the toggle to toggle on the account you want to customize your email signature for.",
            "Paste your new email signature into the text box to save it.",
        ],
        img: yahoo_guide
    }

]
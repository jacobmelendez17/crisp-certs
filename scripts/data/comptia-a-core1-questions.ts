// Generated from CompTIA_A_Core_1_Questions_Organized.csv — do not hand-edit.
// Regenerate via the CSV import if the source question bank changes.

export type ComptiaQuestionType = "SELECT" | "MULTI_SELECT";

export type ComptiaQuestion = {
  unitTitle: string;
  type: ComptiaQuestionType;
  question: string;
  options: { text: string; correct: boolean }[];
};

export const comptiaACore1Questions: ComptiaQuestion[] = [
  {
    "unitTitle": "1.1 - Laptop Hardware",
    "type": "MULTI_SELECT",
    "question": "Which of the following actions are considered best practices for monitoring the health of a mobile device battery? (Select 3 answers)",
    "options": [
      {
        "text": "Always fully discharge the battery before recharging",
        "correct": false
      },
      {
        "text": "Track battery health using built-in OS tools or third-party apps",
        "correct": true
      },
      {
        "text": "Disable battery-saving features to get a more accurate reading of capacity loss",
        "correct": false
      },
      {
        "text": "Monitor charging cycles and battery capacity degradation",
        "correct": true
      },
      {
        "text": "Check for swelling, overheating, or failure to hold a charge",
        "correct": true
      }
    ]
  },
  {
    "unitTitle": "1.1 - Laptop Hardware",
    "type": "MULTI_SELECT",
    "question": "Common battery types used in modern portable devices include: (Select 2 answers)",
    "options": [
      {
        "text": "Nickel-Iron (Ni-Fe)",
        "correct": false
      },
      {
        "text": "Lithium-ion (Li-ion)",
        "correct": true
      },
      {
        "text": "Nickel–Metal Hydride (Ni-MH)",
        "correct": false
      },
      {
        "text": "Lithium-ion Polymer (LiPo)",
        "correct": true
      },
      {
        "text": "Nickel-Cadmium (Ni-Cd)",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "1.1 - Laptop Hardware",
    "type": "MULTI_SELECT",
    "question": "Which of the steps listed below should be followed when replacing a mobile device's battery? (Select 3 answers)",
    "options": [
      {
        "text": "Follow manufacturer guidelines for safe removal and installation",
        "correct": true
      },
      {
        "text": "Ensure proper disposal of the old battery according to local regulations for electronic waste",
        "correct": true
      },
      {
        "text": "Use any available universal battery as long as it fits physically within the device",
        "correct": false
      },
      {
        "text": "Charge the new battery to 100% immediately after installation and then let it fully discharge to \"condition\" it",
        "correct": false
      },
      {
        "text": "Ensure the replacement battery is compatible with the device model",
        "correct": true
      }
    ]
  },
  {
    "unitTitle": "1.1 - Laptop Hardware",
    "type": "SELECT",
    "question": "Which laptop feature compensates for limited keyboard space by enabling additional functions on the same keys?",
    "options": [
      {
        "text": "Touchpad",
        "correct": false
      },
      {
        "text": "Numeric keypad",
        "correct": false
      },
      {
        "text": "Fn key",
        "correct": true
      },
      {
        "text": "Digitizer",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "1.1 - Laptop Hardware",
    "type": "SELECT",
    "question": "Which action does not conform with recommended practices for diagnosing and repairing a mobile device's keyboard?",
    "options": [
      {
        "text": "Implement proper ESD safety measures by using an anti-static wristband and working on an ESD mat to protect sensitive components from static discharge",
        "correct": false
      },
      {
        "text": "Perform comprehensive diagnostics using specialized key testing software to accurately identify any malfunctioning keys",
        "correct": false
      },
      {
        "text": "Use appropriate tools (such as precision screwdrivers and plastic pry tools) and OEM-approved replacement parts to avoid causing further damage during the repair",
        "correct": false
      },
      {
        "text": "Conduct detailed visual inspections to detect physical damage, debris accumulation, or water exposure on the keyboard",
        "correct": false
      },
      {
        "text": "Follow manufacturer guidelines by consulting the service manual or official repair guide to ensure safe disassembly and reassembly of the device",
        "correct": false
      },
      {
        "text": "Leave the device powered on during repair to provide immediate feedback on the exact malfunctioning component, such as a faulty key",
        "correct": true
      }
    ]
  },
  {
    "unitTitle": "1.1 - Laptop Hardware",
    "type": "SELECT",
    "question": "Which of the following devices generally offers the easiest and most user-accessible RAM replacement procedure?",
    "options": [
      {
        "text": "Smartphone",
        "correct": false
      },
      {
        "text": "Tablet",
        "correct": false
      },
      {
        "text": "Gaming console",
        "correct": false
      },
      {
        "text": "Laptop",
        "correct": true
      }
    ]
  },
  {
    "unitTitle": "1.1 - Laptop Hardware",
    "type": "SELECT",
    "question": "Which of the tools listed below can be used to monitor the health and performance of a laptop's storage drive?",
    "options": [
      {
        "text": "S.M.A.R.T.",
        "correct": true
      },
      {
        "text": "Storage Sense",
        "correct": false
      },
      {
        "text": "chkdsk",
        "correct": false
      },
      {
        "text": "Disk defragmenter",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "1.1 - Laptop Hardware",
    "type": "MULTI_SELECT",
    "question": "Which drive malfunction symptoms are not present in SSDs? (Select 2 answers)",
    "options": [
      {
        "text": "Grinding noises",
        "correct": true
      },
      {
        "text": "Slow read/write speeds",
        "correct": false
      },
      {
        "text": "Corrupted or disappearing files",
        "correct": false
      },
      {
        "text": "Clicking sounds",
        "correct": true
      },
      {
        "text": "Blue screen errors",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "1.1 - Laptop Hardware",
    "type": "SELECT",
    "question": "What should be the preliminary step of an HDD/SSD replacement procedure?",
    "options": [
      {
        "text": "Power down the device and remove the battery",
        "correct": false
      },
      {
        "text": "Format the new drive before installing it",
        "correct": false
      },
      {
        "text": "Perform a full system reset before replacing the drive",
        "correct": false
      },
      {
        "text": "Backup the data on the existing drive",
        "correct": true
      }
    ]
  },
  {
    "unitTitle": "1.1 - Laptop Hardware",
    "type": "SELECT",
    "question": "What is the easiest method to monitor the wireless card's performance in a mobile device?",
    "options": [
      {
        "text": "Check the Wi-Fi signal strength icon in the device's notification area",
        "correct": true
      },
      {
        "text": "Observe any LED indicators for Wi-Fi status on the device",
        "correct": false
      },
      {
        "text": "Perform an online speed test to measure the connection's performance",
        "correct": false
      },
      {
        "text": "Manually adjust the antenna position to improve signal strength",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "1.1 - Laptop Hardware",
    "type": "MULTI_SELECT",
    "question": "Which actions should be performed first when replacing a faulty wireless card/module in a laptop? (Select 2 answers)",
    "options": [
      {
        "text": "Power down the laptop and remove the battery",
        "correct": true
      },
      {
        "text": "Label all screws and connectors during disassembly to aid reassembly",
        "correct": false
      },
      {
        "text": "Remove all external peripherals from the device",
        "correct": true
      },
      {
        "text": "Perform a full power cycle of the laptop by turning it off and then on again",
        "correct": false
      },
      {
        "text": "Locate the wireless card slot on the motherboard",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "1.1 - Laptop Hardware",
    "type": "SELECT",
    "question": "Which of the following statements regarding a mobile device Bluetooth module is true?",
    "options": [
      {
        "text": "Bluetooth modules are typically located near the device's display and require screen removal for replacement",
        "correct": false
      },
      {
        "text": "Once a Bluetooth module is replaced, it will automatically adjust to the device’s current settings without the need for manual pairing",
        "correct": false
      },
      {
        "text": "Bluetooth is usually integrated into the Wi-Fi card or directly into the motherboard",
        "correct": true
      },
      {
        "text": "When replacing a faulty Bluetooth module, as long as the physical connectors match, the new Bluetooth module can come from a different device model",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "1.1 - Laptop Hardware",
    "type": "SELECT",
    "question": "What is a recommended practice for assessing the effectiveness and reliability of biometric components on a mobile device?",
    "options": [
      {
        "text": "Using software tools to track scan success rates, response times, and error logs",
        "correct": false
      },
      {
        "text": "Ensuring proper calibration through built-in settings or specialized diagnostic software",
        "correct": false
      },
      {
        "text": "Tracking access attempts and failures for security auditing purposes",
        "correct": false
      },
      {
        "text": "Updating drivers and firmware to prevent malfunctions caused by outdated software",
        "correct": false
      },
      {
        "text": "All of the above",
        "correct": true
      }
    ]
  },
  {
    "unitTitle": "1.1 - Laptop Hardware",
    "type": "SELECT",
    "question": "After replacing a faulty biometric scanner on a mobile device, which essential step must be performed to ensure that the scanner produces accurate readings?",
    "options": [
      {
        "text": "Recalibration",
        "correct": true
      },
      {
        "text": "Factory reset",
        "correct": false
      },
      {
        "text": "Driver update",
        "correct": false
      },
      {
        "text": "Firmware update",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "1.1 - Laptop Hardware",
    "type": "MULTI_SELECT",
    "question": "A technician is troubleshooting a mobile device's NFC functionality. Which action(s) would help verify the NFC scanner's operational status? (Select all that apply)",
    "options": [
      {
        "text": "Check for dirt or moisture on the sensor’s surface",
        "correct": true
      },
      {
        "text": "Test the NFC functionality with a known compatible NFC tag or device",
        "correct": true
      },
      {
        "text": "Update the device's screen brightness, as the NFC sensor relies on ambient light levels",
        "correct": false
      },
      {
        "text": "Connect to a Wi-Fi network to test device connectivity",
        "correct": false
      },
      {
        "text": "Ensure NFC is enabled in the device settings",
        "correct": true
      }
    ]
  },
  {
    "unitTitle": "1.1 - Laptop Hardware",
    "type": "SELECT",
    "question": "Which of the answers listed below correctly describes the typical location of a laptop's Wi-Fi antenna?",
    "options": [
      {
        "text": "On the WLAN module",
        "correct": false
      },
      {
        "text": "Near the top, inside display case",
        "correct": true
      },
      {
        "text": "Inside laptop's case",
        "correct": false
      },
      {
        "text": "Typically attached via external expansion port",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "1.2 - Mobile Devices",
    "type": "SELECT",
    "question": "Which of the following actions would not help in troubleshooting a malfunctioning mobile device camera?",
    "options": [
      {
        "text": "Inspect and clean the camera lens",
        "correct": false
      },
      {
        "text": "Verify camera settings and permissions",
        "correct": false
      },
      {
        "text": "Test camera functionality in multiple apps",
        "correct": false
      },
      {
        "text": "Adjust the host device's screen brightness",
        "correct": true
      },
      {
        "text": "Check for firmware and software updates",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "1.2 - Mobile Devices",
    "type": "SELECT",
    "question": "Which of the items listed below is not recommended for clearing potential blockages from a mobile device microphone?",
    "options": [
      {
        "text": "Lint-free cloth",
        "correct": false
      },
      {
        "text": "Soft brush",
        "correct": false
      },
      {
        "text": "Can of compressed air",
        "correct": true
      },
      {
        "text": "Microfiber cloth",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "1.2 - Mobile Devices",
    "type": "SELECT",
    "question": "A type of USB connection method commonly used in modern mobile devices due to its reversible design, fast data transfer, and power capabilities is known as:",
    "options": [
      {
        "text": "USB Type-B",
        "correct": false
      },
      {
        "text": "MiniUSB",
        "correct": false
      },
      {
        "text": "USB-C",
        "correct": true
      },
      {
        "text": "MicroUSB",
        "correct": false
      },
      {
        "text": "USB Type-A",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "1.2 - Mobile Devices",
    "type": "SELECT",
    "question": "Which proprietary connector was developed by Apple for its mobile devices?",
    "options": [
      {
        "text": "Thunderbolt",
        "correct": false
      },
      {
        "text": "USB-C",
        "correct": false
      },
      {
        "text": "FireWire",
        "correct": false
      },
      {
        "text": "Lightning",
        "correct": true
      }
    ]
  },
  {
    "unitTitle": "1.2 - Mobile Devices",
    "type": "MULTI_SELECT",
    "question": "NFC enables: (Select all that apply)",
    "options": [
      {
        "text": "Contactless payment transactions",
        "correct": true
      },
      {
        "text": "Long-range wireless communication",
        "correct": false
      },
      {
        "text": "Device pairing and data exchange",
        "correct": true
      },
      {
        "text": "Access control and authentication",
        "correct": true
      },
      {
        "text": "Wireless charging of mobile devices",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "1.2 - Mobile Devices",
    "type": "SELECT",
    "question": "Which of the following is a popular, short-range wireless standard for connecting various personal devices in a WPAN?",
    "options": [
      {
        "text": "Zigbee",
        "correct": false
      },
      {
        "text": "NFC",
        "correct": false
      },
      {
        "text": "Bluetooth",
        "correct": true
      },
      {
        "text": "Wi-Fi Direct",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "1.2 - Mobile Devices",
    "type": "SELECT",
    "question": "Which of the terms listed below best describes a mobile device's ability to share its Internet connection with other devices?",
    "options": [
      {
        "text": "Pairing",
        "correct": false
      },
      {
        "text": "Clustering",
        "correct": false
      },
      {
        "text": "Tethering",
        "correct": true
      },
      {
        "text": "Bonding",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "1.2 - Mobile Devices",
    "type": "SELECT",
    "question": "A mobile hotspot is a device that creates a WLAN by acting as a portable WAP for other devices.",
    "options": [
      {
        "text": "True",
        "correct": true
      },
      {
        "text": "False",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "1.2 - Mobile Devices",
    "type": "SELECT",
    "question": "What is the primary function of a stylus (as a mobile device accessory)?",
    "options": [
      {
        "text": "Precise input and drawing",
        "correct": true
      },
      {
        "text": "Audio input and output",
        "correct": false
      },
      {
        "text": "Audio playback",
        "correct": false
      },
      {
        "text": "Video input for conferencing",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "1.2 - Mobile Devices",
    "type": "SELECT",
    "question": "What is the primary function of a headset (as a mobile device accessory)?",
    "options": [
      {
        "text": "Precise input and drawing",
        "correct": false
      },
      {
        "text": "Audio input and output",
        "correct": true
      },
      {
        "text": "Audio playback",
        "correct": false
      },
      {
        "text": "Video input for conferencing",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "1.2 - Mobile Devices",
    "type": "SELECT",
    "question": "What is the primary function of external speakers (as a mobile device accessory)?",
    "options": [
      {
        "text": "Precise input and drawing",
        "correct": false
      },
      {
        "text": "Audio input and output",
        "correct": false
      },
      {
        "text": "Audio playback",
        "correct": true
      },
      {
        "text": "Video input for conferencing",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "1.2 - Mobile Devices",
    "type": "SELECT",
    "question": "What is the primary function of a webcam (as a mobile device accessory)?",
    "options": [
      {
        "text": "Precise input and drawing",
        "correct": false
      },
      {
        "text": "Audio input and output",
        "correct": false
      },
      {
        "text": "Audio playback",
        "correct": false
      },
      {
        "text": "Video input for conferencing",
        "correct": true
      }
    ]
  },
  {
    "unitTitle": "1.2 - Mobile Devices",
    "type": "SELECT",
    "question": "Which connectivity options are typically available for a stylus?",
    "options": [
      {
        "text": "Passive (direct-touch) or Active (Bluetooth-enabled)",
        "correct": true
      },
      {
        "text": "Wired (3.5mm port/jack, USB-C, Lightning) or Wireless (Bluetooth)",
        "correct": false
      },
      {
        "text": "Wired (auxiliary 3.5mm port/jack, USB) or Wireless (Bluetooth, Wi-Fi)",
        "correct": false
      },
      {
        "text": "Wired (USB) or Wireless (Wi-Fi)",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "1.2 - Mobile Devices",
    "type": "SELECT",
    "question": "Which connectivity options are typically available for a headset?",
    "options": [
      {
        "text": "Passive (direct-touch) or Active (Bluetooth-enabled)",
        "correct": false
      },
      {
        "text": "Wired (3.5mm port/jack, USB-C, Lightning) or Wireless (Bluetooth)",
        "correct": true
      },
      {
        "text": "Wired (auxiliary 3.5mm port/jack, USB) or Wireless (Bluetooth, Wi-Fi)",
        "correct": false
      },
      {
        "text": "Wired (USB) or Wireless (Wi-Fi)",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "1.2 - Mobile Devices",
    "type": "SELECT",
    "question": "Which connectivity options are typically available for external speakers?",
    "options": [
      {
        "text": "Passive (direct-touch) or Active (Bluetooth-enabled)",
        "correct": false
      },
      {
        "text": "Wired (3.5mm port/jack, USB-C, Lightning) or Wireless (Bluetooth)",
        "correct": false
      },
      {
        "text": "Wired (auxiliary 3.5mm port/jack, USB) or Wireless (Bluetooth, Wi-Fi)",
        "correct": true
      },
      {
        "text": "Wired (USB) or Wireless (Wi-Fi)",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "1.2 - Mobile Devices",
    "type": "SELECT",
    "question": "Which connectivity options are typically available for a webcam?",
    "options": [
      {
        "text": "Passive (direct-touch) or Active (Bluetooth-enabled)",
        "correct": false
      },
      {
        "text": "Wired (3.5mm port/jack, USB-C, Lightning) or Wireless (Bluetooth)",
        "correct": false
      },
      {
        "text": "Wired (auxiliary 3.5mm port/jack, USB) or Wireless (Bluetooth, Wi-Fi)",
        "correct": false
      },
      {
        "text": "Wired (USB) or Wireless (Wi-Fi)",
        "correct": true
      }
    ]
  },
  {
    "unitTitle": "1.2 - Mobile Devices",
    "type": "SELECT",
    "question": "What is the name of a laptop component that provides the function of a pointing device?",
    "options": [
      {
        "text": "Stylus",
        "correct": false
      },
      {
        "text": "Mouse",
        "correct": false
      },
      {
        "text": "Trackpad",
        "correct": true
      },
      {
        "text": "Cursor",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "1.2 - Mobile Devices",
    "type": "SELECT",
    "question": "Which of the input devices listed below requires a stylus?",
    "options": [
      {
        "text": "Touchpad",
        "correct": false
      },
      {
        "text": "Tracking point",
        "correct": false
      },
      {
        "text": "Drawing pad",
        "correct": true
      },
      {
        "text": "Trackpad",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "1.2 - Mobile Devices",
    "type": "SELECT",
    "question": "A track point is a small pointing stick embedded in a keyboard used for precise cursor control.",
    "options": [
      {
        "text": "True",
        "correct": true
      },
      {
        "text": "False",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "1.3 - Mobile Device Network & Management",
    "type": "SELECT",
    "question": "What is the latest standard for mobile telecommunications?",
    "options": [
      {
        "text": "Wi-Fi 7",
        "correct": false
      },
      {
        "text": "Bluetooth 6.0",
        "correct": false
      },
      {
        "text": "5G",
        "correct": true
      },
      {
        "text": "WiMAX 3",
        "correct": false
      },
      {
        "text": "None of the above",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "1.3 - Mobile Device Network & Management",
    "type": "SELECT",
    "question": "What is the primary purpose of enabling a mobile hotspot feature on a smartphone?",
    "options": [
      {
        "text": "To transfer files between the phone and other devices",
        "correct": false
      },
      {
        "text": "To boost Wi-Fi signal strength in the area",
        "correct": false
      },
      {
        "text": "To share the phone's cellular data connection with other devices",
        "correct": true
      },
      {
        "text": "To allow the phone to access a wired network",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "1.3 - Mobile Device Network & Management",
    "type": "SELECT",
    "question": "What can be a probable reason why a mobile hotspot might not be working on a device?",
    "options": [
      {
        "text": "The device has a locked SIM card",
        "correct": false
      },
      {
        "text": "Wi-Fi is disabled on the connecting device",
        "correct": false
      },
      {
        "text": "The device is not compatible with the connecting device",
        "correct": false
      },
      {
        "text": "Cellular data is disabled on the device",
        "correct": true
      },
      {
        "text": "The device is being used to make a phone call",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "1.3 - Mobile Device Network & Management",
    "type": "SELECT",
    "question": "A user is attempting to connect to a workplace Wi-Fi network, but their mobile device shows no available networks. What is the most appropriate first step in troubleshooting this issue?",
    "options": [
      {
        "text": "Restart the wireless access point",
        "correct": false
      },
      {
        "text": "Switch to a different frequency band",
        "correct": false
      },
      {
        "text": "Verify that Wi-Fi is enabled on the mobile device",
        "correct": true
      },
      {
        "text": "Change the wireless channel",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "1.3 - Mobile Device Network & Management",
    "type": "SELECT",
    "question": "Which of the statements listed below does not refer to the characteristic features of a traditional SIM?",
    "options": [
      {
        "text": "Physical card",
        "correct": false
      },
      {
        "text": "Installed by inserting the card into a device's SIM slot",
        "correct": false
      },
      {
        "text": "Can be moved between devices",
        "correct": false
      },
      {
        "text": "Requires physical SIM swap for changing carriers",
        "correct": false
      },
      {
        "text": "None of the above",
        "correct": true
      }
    ]
  },
  {
    "unitTitle": "1.3 - Mobile Device Network & Management",
    "type": "SELECT",
    "question": "An eSIM is a modern alternative to the traditional SIM card. Unlike traditional SIMs, an eSIM is an embedded chip built into the device (not a physical card).",
    "options": [
      {
        "text": "True",
        "correct": true
      },
      {
        "text": "False",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "1.3 - Mobile Device Network & Management",
    "type": "SELECT",
    "question": "In the Bluetooth authentication process, a PIN serves as a shared secret or passkey used during the pairing process to authenticate the identity of the two devices attempting to connect.",
    "options": [
      {
        "text": "True",
        "correct": true
      },
      {
        "text": "False",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "1.3 - Mobile Device Network & Management",
    "type": "SELECT",
    "question": "What is the correct sequence of steps to establish Bluetooth connectivity?",
    "options": [
      {
        "text": "Enable Bluetooth -> Test connectivity -> Find a device for pairing -> Enter identification code -> Enable pairing",
        "correct": false
      },
      {
        "text": "Find a device for pairing -> Enable Bluetooth -> Test connectivity -> Enable pairing -> Enter identification code",
        "correct": false
      },
      {
        "text": "Enable Bluetooth -> Enable pairing -> Find a device for pairing -> Enter identification code -> Test connectivity",
        "correct": true
      },
      {
        "text": "Test connectivity -> Enable Bluetooth -> Find a device for pairing -> Enable pairing -> Enter identification code",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "1.3 - Mobile Device Network & Management",
    "type": "SELECT",
    "question": "A mobile device's built-in functionality enabling the usage of locator applications is called:",
    "options": [
      {
        "text": "GPS",
        "correct": true
      },
      {
        "text": "LTE",
        "correct": false
      },
      {
        "text": "GSM",
        "correct": false
      },
      {
        "text": "MDM",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "1.3 - Mobile Device Network & Management",
    "type": "SELECT",
    "question": "Which of the following is a common issue that can prevent cellular location services from working properly? (Select the best answer)",
    "options": [
      {
        "text": "Location services turned off",
        "correct": false
      },
      {
        "text": "Weak cellular signal",
        "correct": false
      },
      {
        "text": "Incorrect permissions for location-based applications",
        "correct": false
      },
      {
        "text": "Any of the above",
        "correct": true
      }
    ]
  },
  {
    "unitTitle": "1.3 - Mobile Device Network & Management",
    "type": "SELECT",
    "question": "Which of the answers listed below accurately describes the advantage of using cellular location services over GPS in certain scenarios?",
    "options": [
      {
        "text": "Cellular location services can provide more precise location data than GPS",
        "correct": false
      },
      {
        "text": "Cellular location services work indoors and in locations where GPS signals are blocked",
        "correct": true
      },
      {
        "text": "Cellular location services use satellite signals for location tracking",
        "correct": false
      },
      {
        "text": "Cellular location services do not use network data",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "1.3 - Mobile Device Network & Management",
    "type": "SELECT",
    "question": "Which software solution is used for centralized mobile device administration?",
    "options": [
      {
        "text": "XDR",
        "correct": false
      },
      {
        "text": "MDM",
        "correct": true
      },
      {
        "text": "DLP",
        "correct": false
      },
      {
        "text": "UTM",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "1.3 - Mobile Device Network & Management",
    "type": "SELECT",
    "question": "Which mobile device deployment model allows organizations to provide and own the devices while permitting personal use?",
    "options": [
      {
        "text": "BYOD",
        "correct": false
      },
      {
        "text": "COPE",
        "correct": true
      },
      {
        "text": "ZTA",
        "correct": false
      },
      {
        "text": "CYOD",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "1.3 - Mobile Device Network & Management",
    "type": "SELECT",
    "question": "Which mobile device deployment model allows employees to use their personal mobile devices to access a company's restricted data and applications?",
    "options": [
      {
        "text": "COPE",
        "correct": false
      },
      {
        "text": "CYOD",
        "correct": false
      },
      {
        "text": "BYOD",
        "correct": true
      },
      {
        "text": "COBO",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "1.3 - Mobile Device Network & Management",
    "type": "SELECT",
    "question": "Which of the following allows organizations to manage and enforce mobile device policies and security procedures?",
    "options": [
      {
        "text": "MAC",
        "correct": false
      },
      {
        "text": "ZTA",
        "correct": false
      },
      {
        "text": "MDM",
        "correct": true
      },
      {
        "text": "EDR",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "1.3 - Mobile Device Network & Management",
    "type": "SELECT",
    "question": "A user reports that a critical business application is no longer appearing on their company-issued smartphone, while other colleagues still have the application. What is the most likely cause to investigate first?",
    "options": [
      {
        "text": "The user accidentally deleted the application icon from their home screen",
        "correct": false
      },
      {
        "text": "The application may have been remotely uninstalled, or the user's access to it may have been revoked",
        "correct": true
      },
      {
        "text": "The app may be restricted due to the user’s geolocation, causing it to be hidden",
        "correct": false
      },
      {
        "text": "The device is in airplane mode, preventing app synchronization",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "1.3 - Mobile Device Network & Management",
    "type": "SELECT",
    "question": "Mobile device synchronization involves ensuring that data across various applications, such as calendars, contacts, business emails, and cloud storage, is kept consistent between the device and remote servers. It is essential to manage synchronization carefully, especially with mobile data usage, to avoid exceeding data caps. By configuring devices to sync only over Wi-Fi or adjusting sync frequency, users can reduce mobile data consumption while ensuring critical business applications remain up-to-date.",
    "options": [
      {
        "text": "True",
        "correct": true
      },
      {
        "text": "False",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "2.1 - Introduction to IP",
    "type": "SELECT",
    "question": "What is the function of FTP?",
    "options": [
      {
        "text": "Email service",
        "correct": false
      },
      {
        "text": "Directory access",
        "correct": false
      },
      {
        "text": "Serving of web pages",
        "correct": false
      },
      {
        "text": "File exchange",
        "correct": true
      }
    ]
  },
  {
    "unitTitle": "2.1 - Introduction to IP",
    "type": "SELECT",
    "question": "A type of cryptographic network protocol for secure data communication, remote command-line login, remote command execution, and other secure network services between networked computers is called:",
    "options": [
      {
        "text": "RDP",
        "correct": false
      },
      {
        "text": "SSH",
        "correct": true
      },
      {
        "text": "Telnet",
        "correct": false
      },
      {
        "text": "SCP",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "2.1 - Introduction to IP",
    "type": "MULTI_SELECT",
    "question": "Telnet: (Select 3 answers)",
    "options": [
      {
        "text": "Encrypts network connection",
        "correct": false
      },
      {
        "text": "Provides username & password authentication",
        "correct": true
      },
      {
        "text": "Transmits data in an unencrypted form",
        "correct": true
      },
      {
        "text": "Does not provide authentication",
        "correct": false
      },
      {
        "text": "Enables remote login and command execution",
        "correct": true
      }
    ]
  },
  {
    "unitTitle": "2.1 - Introduction to IP",
    "type": "SELECT",
    "question": "Which of the answers listed below refers to a secure replacement for Telnet?",
    "options": [
      {
        "text": "SSH",
        "correct": true
      },
      {
        "text": "Rlogin",
        "correct": false
      },
      {
        "text": "rsh",
        "correct": false
      },
      {
        "text": "SNMP",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "2.1 - Introduction to IP",
    "type": "MULTI_SELECT",
    "question": "The SMTP protocol is used for: (Select 2 answers)",
    "options": [
      {
        "text": "Sending email messages between mail servers",
        "correct": true
      },
      {
        "text": "Name resolution services",
        "correct": false
      },
      {
        "text": "Serving of web pages",
        "correct": false
      },
      {
        "text": "Retrieving email messages from mail servers",
        "correct": false
      },
      {
        "text": "Sending email messages from a client device",
        "correct": true
      }
    ]
  },
  {
    "unitTitle": "2.1 - Introduction to IP",
    "type": "SELECT",
    "question": "Which of the following refers to a system that translates domain names to IP addresses and stores other domain-related records?",
    "options": [
      {
        "text": "DHCP",
        "correct": false
      },
      {
        "text": "ARP",
        "correct": false
      },
      {
        "text": "WINS",
        "correct": false
      },
      {
        "text": "DNS",
        "correct": true
      }
    ]
  },
  {
    "unitTitle": "2.1 - Introduction to IP",
    "type": "SELECT",
    "question": "Which network protocol provides an automated alternative to manual IP address allocation?",
    "options": [
      {
        "text": "APIPA",
        "correct": false
      },
      {
        "text": "NAT",
        "correct": false
      },
      {
        "text": "DHCP",
        "correct": true
      },
      {
        "text": "Zeroconf",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "2.1 - Introduction to IP",
    "type": "SELECT",
    "question": "Which of the protocols listed below is used to retrieve the contents of an Internet page from a web server?",
    "options": [
      {
        "text": "IMAP",
        "correct": false
      },
      {
        "text": "HTTP",
        "correct": true
      },
      {
        "text": "FTP",
        "correct": false
      },
      {
        "text": "SMTP",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "2.1 - Introduction to IP",
    "type": "SELECT",
    "question": "POP3 is used for:",
    "options": [
      {
        "text": "Name resolution",
        "correct": false
      },
      {
        "text": "Sending email messages",
        "correct": false
      },
      {
        "text": "File exchange",
        "correct": false
      },
      {
        "text": "Email retrieval",
        "correct": true
      }
    ]
  },
  {
    "unitTitle": "2.1 - Introduction to IP",
    "type": "MULTI_SELECT",
    "question": "Which of the answers listed below refer to IMAP? (Select 2 answers)",
    "options": [
      {
        "text": "Offers improved functionality in comparison to POP3",
        "correct": true
      },
      {
        "text": "Serves the same function as POP3",
        "correct": true
      },
      {
        "text": "Enables sending email messages from client devices",
        "correct": false
      },
      {
        "text": "Offers less functions than POP3",
        "correct": false
      },
      {
        "text": "Enables email exchange between mail servers",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "2.1 - Introduction to IP",
    "type": "SELECT",
    "question": "Which of the following answers refers to an API that enables communication between hosts on a LAN?",
    "options": [
      {
        "text": "DNS",
        "correct": false
      },
      {
        "text": "TCP/IP",
        "correct": false
      },
      {
        "text": "NetBIOS",
        "correct": true
      },
      {
        "text": "DHCP",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "2.1 - Introduction to IP",
    "type": "SELECT",
    "question": "The function of the NetBT protocol is to allow NetBIOS services to be used over TCP/IP networks.",
    "options": [
      {
        "text": "True",
        "correct": true
      },
      {
        "text": "False",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "2.1 - Introduction to IP",
    "type": "SELECT",
    "question": "LDAP is an example of:",
    "options": [
      {
        "text": "Authentication protocol",
        "correct": false
      },
      {
        "text": "Directory access protocol",
        "correct": true
      },
      {
        "text": "Address resolution protocol",
        "correct": false
      },
      {
        "text": "File exchange protocol",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "2.1 - Introduction to IP",
    "type": "SELECT",
    "question": "Which protocol secures web traffic with SSL/TLS encryption to ensure the confidentiality, integrity, and authentication of the data exchanged between a user's browser and a web server?",
    "options": [
      {
        "text": "SFTP",
        "correct": false
      },
      {
        "text": "IPsec",
        "correct": false
      },
      {
        "text": "SSH",
        "correct": false
      },
      {
        "text": "HTTPS",
        "correct": true
      }
    ]
  },
  {
    "unitTitle": "2.1 - Introduction to IP",
    "type": "SELECT",
    "question": "SMB is a protocol used for:",
    "options": [
      {
        "text": "File and printer sharing between devices on a network",
        "correct": true
      },
      {
        "text": "Collecting diagnostic and monitoring data from networked devices",
        "correct": false
      },
      {
        "text": "Routing network traffic between different subnets",
        "correct": false
      },
      {
        "text": "Managing and allocating IP addresses within a network",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "2.1 - Introduction to IP",
    "type": "SELECT",
    "question": "Which Microsoft-proprietary protocol enables remote access and administration of another networked host through a graphical interface?",
    "options": [
      {
        "text": "VDI",
        "correct": false
      },
      {
        "text": "RDP",
        "correct": true
      },
      {
        "text": "SSH",
        "correct": false
      },
      {
        "text": "VNC",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "2.1 - Introduction to IP",
    "type": "SELECT",
    "question": "UDP is a connection-oriented protocol using a three-way handshake, which is a set of initial steps required for establishing a network connection. UDP supports error checking, flow control (managing the amount of data that is being sent), sequencing (rearranging packets that arrived out of order), and retransmission of lost packets. Example applications of UDP include the transmission of text and image data.",
    "options": [
      {
        "text": "True",
        "correct": false
      },
      {
        "text": "False",
        "correct": true
      }
    ]
  },
  {
    "unitTitle": "2.1 - Introduction to IP",
    "type": "SELECT",
    "question": "TCP is an example of a connectionless protocol. Since TCP does not use a three-way handshake to establish a network connection, it is considered an unreliable or best-effort protocol. Example applications of TCP include the transmission of video and audio streaming data.",
    "options": [
      {
        "text": "True",
        "correct": false
      },
      {
        "text": "False",
        "correct": true
      }
    ]
  },
  {
    "unitTitle": "2.1 - Introduction to IP",
    "type": "SELECT",
    "question": "Which port enables the FTP data connection for transferring file data?",
    "options": [
      {
        "text": "UDP port 20",
        "correct": false
      },
      {
        "text": "TCP port 20",
        "correct": true
      },
      {
        "text": "UDP port 21",
        "correct": false
      },
      {
        "text": "TCP port 21",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "2.1 - Introduction to IP",
    "type": "SELECT",
    "question": "The FTP control connection to administer a session is established through:",
    "options": [
      {
        "text": "TCP port 20",
        "correct": false
      },
      {
        "text": "UDP port 20",
        "correct": false
      },
      {
        "text": "TCP port 21",
        "correct": true
      },
      {
        "text": "UDP port 21",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "2.1 - Introduction to IP",
    "type": "SELECT",
    "question": "Which port does the SSH protocol use?",
    "options": [
      {
        "text": "TCP port 21",
        "correct": false
      },
      {
        "text": "UDP port 22",
        "correct": false
      },
      {
        "text": "TCP port 20",
        "correct": false
      },
      {
        "text": "TCP port 22",
        "correct": true
      }
    ]
  },
  {
    "unitTitle": "2.1 - Introduction to IP",
    "type": "SELECT",
    "question": "Which TCP port is used by the Telnet protocol?",
    "options": [
      {
        "text": "Port 20",
        "correct": false
      },
      {
        "text": "Port 21",
        "correct": false
      },
      {
        "text": "Port 22",
        "correct": false
      },
      {
        "text": "Port 23",
        "correct": true
      }
    ]
  },
  {
    "unitTitle": "2.1 - Introduction to IP",
    "type": "SELECT",
    "question": "TCP port 25 is used by:",
    "options": [
      {
        "text": "SNMP",
        "correct": false
      },
      {
        "text": "Telnet",
        "correct": false
      },
      {
        "text": "FTP",
        "correct": false
      },
      {
        "text": "SMTP",
        "correct": true
      }
    ]
  },
  {
    "unitTitle": "2.1 - Introduction to IP",
    "type": "SELECT",
    "question": "Which TCP/UDP port is assigned to DNS?",
    "options": [
      {
        "text": "Port 53",
        "correct": true
      },
      {
        "text": "Port 67",
        "correct": false
      },
      {
        "text": "Port 110",
        "correct": false
      },
      {
        "text": "Port 389",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "2.1 - Introduction to IP",
    "type": "SELECT",
    "question": "A DHCP server operates on UDP port:",
    "options": [
      {
        "text": "Port 66",
        "correct": false
      },
      {
        "text": "Port 67",
        "correct": true
      },
      {
        "text": "Port 68",
        "correct": false
      },
      {
        "text": "Port 69",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "2.1 - Introduction to IP",
    "type": "SELECT",
    "question": "Which UDP port is used by a DHCP client to receive responses from a DHCP server?",
    "options": [
      {
        "text": "Port 66",
        "correct": false
      },
      {
        "text": "Port 67",
        "correct": false
      },
      {
        "text": "Port 68",
        "correct": true
      },
      {
        "text": "Port 69",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "2.1 - Introduction to IP",
    "type": "SELECT",
    "question": "Which protocol operates on TCP port 80?",
    "options": [
      {
        "text": "HTTP",
        "correct": true
      },
      {
        "text": "IMAP",
        "correct": false
      },
      {
        "text": "HTTPS",
        "correct": false
      },
      {
        "text": "LDAP",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "2.1 - Introduction to IP",
    "type": "SELECT",
    "question": "What is the default port for POP3 communication?",
    "options": [
      {
        "text": "TCP port 110",
        "correct": true
      },
      {
        "text": "UDP port 123",
        "correct": false
      },
      {
        "text": "TCP port 143",
        "correct": false
      },
      {
        "text": "UDP port 161",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "2.1 - Introduction to IP",
    "type": "SELECT",
    "question": "Which service operates on TCP port 389?",
    "options": [
      {
        "text": "RDP",
        "correct": false
      },
      {
        "text": "LDAP",
        "correct": true
      },
      {
        "text": "SMB",
        "correct": false
      },
      {
        "text": "LDAPS",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "2.1 - Introduction to IP",
    "type": "SELECT",
    "question": "What is the default TCP port used for HTTPS communication?",
    "options": [
      {
        "text": "Port 80",
        "correct": false
      },
      {
        "text": "Port 443",
        "correct": true
      },
      {
        "text": "Port 53",
        "correct": false
      },
      {
        "text": "Port 143",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "2.1 - Introduction to IP",
    "type": "SELECT",
    "question": "Which of the following services runs on TCP port 445?",
    "options": [
      {
        "text": "HTTPS",
        "correct": false
      },
      {
        "text": "SMB",
        "correct": true
      },
      {
        "text": "IMAP",
        "correct": false
      },
      {
        "text": "LDAPS",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "2.1 - Introduction to IP",
    "type": "SELECT",
    "question": "Which TCP port is used for RDP?",
    "options": [
      {
        "text": "Port 514",
        "correct": false
      },
      {
        "text": "Port 3389",
        "correct": true
      },
      {
        "text": "Port 22",
        "correct": false
      },
      {
        "text": "Port 5900",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "2.2 - Wireless Network Technologies",
    "type": "MULTI_SELECT",
    "question": "Which of the answers listed below describe the characteristics of the 2.4 GHz frequency range, when compared to higher-frequency bands like 5 GHz and 6 GHz? (Select 3 answers)",
    "options": [
      {
        "text": "The longest range (better penetration through obstacles)",
        "correct": true
      },
      {
        "text": "A wider number of available channels with less overlap",
        "correct": false
      },
      {
        "text": "Higher susceptibility to interference due to device congestion",
        "correct": true
      },
      {
        "text": "The lowest number of non-overlapping channels",
        "correct": true
      },
      {
        "text": "Shorter range (weaker penetration through obstacles)",
        "correct": false
      },
      {
        "text": "Less interference due to fewer devices using the band",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "2.2 - Wireless Network Technologies",
    "type": "SELECT",
    "question": "Compared to the 2.4 GHz and 6 GHz frequency bands, the 5 GHz frequency range offers:",
    "options": [
      {
        "text": "The longest range among available Wi-Fi bands",
        "correct": false
      },
      {
        "text": "The best penetration through walls and obstacles",
        "correct": false
      },
      {
        "text": "The highest number of non-overlapping channels",
        "correct": false
      },
      {
        "text": "The fastest data speeds of all frequency bands",
        "correct": false
      },
      {
        "text": "None of the above",
        "correct": true
      }
    ]
  },
  {
    "unitTitle": "2.2 - Wireless Network Technologies",
    "type": "SELECT",
    "question": "Which of the following answers does not refer to the 6 GHz frequency band?",
    "options": [
      {
        "text": "The longest range among available Wi-Fi bands",
        "correct": true
      },
      {
        "text": "The highest number of non-overlapping channels",
        "correct": false
      },
      {
        "text": "The lowest susceptibility to interference",
        "correct": false
      },
      {
        "text": "The fastest data speeds of all frequency bands",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "2.2 - Wireless Network Technologies",
    "type": "SELECT",
    "question": "Wireless networking channels are governed by country-specific regulations. These rules define which frequency bands can be used for wireless communication, whether they require licensing (such as cellular or satellite communication) or are unlicensed (such as Wi-Fi). They also specify the number and width of available channels within those bands and set limits on transmission power.",
    "options": [
      {
        "text": "True",
        "correct": true
      },
      {
        "text": "False",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "2.2 - Wireless Network Technologies",
    "type": "SELECT",
    "question": "In wireless networks, channel overlapping occurs when multiple channels share the same frequency band, causing interference and performance degradation for devices operating on channels that are too close to each other. A common example of channel overlapping is found in the 2.4 GHz band (2.400–2.4835 GHz) used in 802.11 networks, where the frequency range is divided into 11 channels (the number of channels may vary by region), each occupying a 22 MHz portion of the spectrum. Setting up a wireless network to operate on non-overlapping channels (typically 1, 6, and 11) allows multiple networks to coexist in the same area without causing interference.",
    "options": [
      {
        "text": "True",
        "correct": true
      },
      {
        "text": "False",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "2.2 - Wireless Network Technologies",
    "type": "SELECT",
    "question": "Which of the statements listed below best describes the effect of increasing channel width in a wireless network?",
    "options": [
      {
        "text": "Extends the range of the wireless signal",
        "correct": false
      },
      {
        "text": "Increases data throughput but may cause more interference",
        "correct": true
      },
      {
        "text": "Minimizes latency for all connected devices",
        "correct": false
      },
      {
        "text": "Reduces interference from neighboring channels",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "2.2 - Wireless Network Technologies",
    "type": "SELECT",
    "question": "Which of the following statements does not describe RFID?",
    "options": [
      {
        "text": "Utilized in automatic identification and object tracking",
        "correct": false
      },
      {
        "text": "Used for communication between tags and readers via radio waves",
        "correct": false
      },
      {
        "text": "Implemented in supply chain, logistics, and access control systems",
        "correct": false
      },
      {
        "text": "Found in some contactless payment systems and smart cards",
        "correct": false
      },
      {
        "text": "Designed for short-range personal area networking",
        "correct": true
      }
    ]
  },
  {
    "unitTitle": "2.3 - Network Services",
    "type": "SELECT",
    "question": "When a web browser needs to access a website identified by its domain name, which type of server provides the IP address required for the connection?",
    "options": [
      {
        "text": "DNS server",
        "correct": true
      },
      {
        "text": "Proxy server",
        "correct": false
      },
      {
        "text": "DHCP server",
        "correct": false
      },
      {
        "text": "Web server",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "2.3 - Network Services",
    "type": "SELECT",
    "question": "What is the primary function of a DHCP server?",
    "options": [
      {
        "text": "Mapping IP addresses to MAC addresses",
        "correct": false
      },
      {
        "text": "Assigning dynamic IP addresses to clients",
        "correct": true
      },
      {
        "text": "Monitoring IP address conflicts",
        "correct": false
      },
      {
        "text": "Logging IP address assignment history",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "2.3 - Network Services",
    "type": "SELECT",
    "question": "A company wants its employees to access, store, and manage shared documents centrally over a network. Which type of server should they implement?",
    "options": [
      {
        "text": "Mail server",
        "correct": false
      },
      {
        "text": "File server",
        "correct": true
      },
      {
        "text": "Print server",
        "correct": false
      },
      {
        "text": "Database server",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "2.3 - Network Services",
    "type": "SELECT",
    "question": "Which type of server does not primarily store files but facilitates document output?",
    "options": [
      {
        "text": "Web server",
        "correct": false
      },
      {
        "text": "Application server",
        "correct": false
      },
      {
        "text": "Print server",
        "correct": true
      },
      {
        "text": "Database server",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "2.3 - Network Services",
    "type": "SELECT",
    "question": "A company requires a server that supports the SMTP and IMAP protocols for managing electronic messages. Which type of server should they implement?",
    "options": [
      {
        "text": "Chat server",
        "correct": false
      },
      {
        "text": "IM server",
        "correct": false
      },
      {
        "text": "Mail server",
        "correct": true
      },
      {
        "text": "VoIP server",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "2.3 - Network Services",
    "type": "SELECT",
    "question": "Which type of server is primarily responsible for collecting diagnostic and monitoring data from networked devices?",
    "options": [
      {
        "text": "Jump server",
        "correct": false
      },
      {
        "text": "C2 server",
        "correct": false
      },
      {
        "text": "Syslog server",
        "correct": true
      },
      {
        "text": "ICS server",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "2.3 - Network Services",
    "type": "SELECT",
    "question": "A company wants to expand beyond static content (such as HTML documents) and support interactive web applications. Which server type is best suited for this purpose?",
    "options": [
      {
        "text": "Remote access server",
        "correct": false
      },
      {
        "text": "Web server",
        "correct": true
      },
      {
        "text": "Media streaming server",
        "correct": false
      },
      {
        "text": "Game server",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "2.3 - Network Services",
    "type": "SELECT",
    "question": "Which part of the AAA security architecture deals with the verification of the identity of a person or process?",
    "options": [
      {
        "text": "Auditing",
        "correct": false
      },
      {
        "text": "Authentication",
        "correct": true
      },
      {
        "text": "Authorization",
        "correct": false
      },
      {
        "text": "Accounting",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "2.3 - Network Services",
    "type": "SELECT",
    "question": "In the AAA security architecture, the process of granting or denying access to resources is known as:",
    "options": [
      {
        "text": "Authorization",
        "correct": true
      },
      {
        "text": "Accounting",
        "correct": false
      },
      {
        "text": "Auditing",
        "correct": false
      },
      {
        "text": "Authentication",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "2.3 - Network Services",
    "type": "SELECT",
    "question": "In the AAA security architecture, the process of tracking accessed services and logging resource consumption is called:",
    "options": [
      {
        "text": "Authentication",
        "correct": false
      },
      {
        "text": "Auditing",
        "correct": false
      },
      {
        "text": "Accounting",
        "correct": true
      },
      {
        "text": "Authorization",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "2.3 - Network Services",
    "type": "SELECT",
    "question": "Which AAA solution uses UDP as its transport protocol, combines authentication and authorization, and is commonly deployed for network access control such as VPNs and Wi-Fi authentication?",
    "options": [
      {
        "text": "RADIUS",
        "correct": true
      },
      {
        "text": "LDAP",
        "correct": false
      },
      {
        "text": "TACACS+",
        "correct": false
      },
      {
        "text": "Kerberos",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "2.3 - Network Services",
    "type": "SELECT",
    "question": "Which of the AAA solutions listed below relies on TCP, separates authentication, authorization, and accounting, and is commonly used for device administration in enterprise networks?",
    "options": [
      {
        "text": "OAuth",
        "correct": false
      },
      {
        "text": "TACACS+",
        "correct": true
      },
      {
        "text": "SAML",
        "correct": false
      },
      {
        "text": "RADIUS",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "2.3 - Network Services",
    "type": "SELECT",
    "question": "What is the primary function of SQL Server?",
    "options": [
      {
        "text": "Application server",
        "correct": false
      },
      {
        "text": "Network protocol",
        "correct": false
      },
      {
        "text": "C2 server",
        "correct": false
      },
      {
        "text": "Database management system",
        "correct": true
      }
    ]
  },
  {
    "unitTitle": "2.3 - Network Services",
    "type": "SELECT",
    "question": "Which server type provides time synchronization services across devices within a network?",
    "options": [
      {
        "text": "NTP",
        "correct": true
      },
      {
        "text": "VTP",
        "correct": false
      },
      {
        "text": "NNTP",
        "correct": false
      },
      {
        "text": "RTP",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "2.3 - Network Services",
    "type": "SELECT",
    "question": "Which appliance monitors inbound electronic communication and applies filtering rules to block unwanted or malicious messages from entering the network?",
    "options": [
      {
        "text": "Content filter",
        "correct": false
      },
      {
        "text": "Mail server",
        "correct": false
      },
      {
        "text": "Antivirus software",
        "correct": false
      },
      {
        "text": "Spam gateway",
        "correct": true
      }
    ]
  },
  {
    "unitTitle": "2.3 - Network Services",
    "type": "SELECT",
    "question": "Which of the following answers refers to a network security solution providing a single point of protection against various types of threats?",
    "options": [
      {
        "text": "IDP",
        "correct": false
      },
      {
        "text": "AV",
        "correct": false
      },
      {
        "text": "UTM",
        "correct": true
      },
      {
        "text": "NGFW",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "2.3 - Network Services",
    "type": "SELECT",
    "question": "A network hardware or software solution designed for managing the optimal distribution of workloads across multiple computing resources is referred to as:",
    "options": [
      {
        "text": "Content filter",
        "correct": false
      },
      {
        "text": "Proxy server",
        "correct": false
      },
      {
        "text": "Load balancer",
        "correct": true
      },
      {
        "text": "Domain controller",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "2.3 - Network Services",
    "type": "SELECT",
    "question": "Which of the answers listed below refers to a computer system or an application that acts as an intermediary between a client computer and the Internet by relaying and filtering requests?",
    "options": [
      {
        "text": "Network gateway",
        "correct": false
      },
      {
        "text": "Content filter",
        "correct": false
      },
      {
        "text": "Firewall",
        "correct": false
      },
      {
        "text": "Proxy server",
        "correct": true
      }
    ]
  },
  {
    "unitTitle": "2.3 - Network Services",
    "type": "SELECT",
    "question": "What is the primary purpose of a SCADA system?",
    "options": [
      {
        "text": "Managing and automating network infrastructure",
        "correct": false
      },
      {
        "text": "Implementing biometric access control for secure facilities",
        "correct": false
      },
      {
        "text": "Monitoring and controlling industrial processes remotely",
        "correct": true
      },
      {
        "text": "Controlling humidity, temperature, and air quality",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "2.3 - Network Services",
    "type": "SELECT",
    "question": "Which of the following answers refers to a network of interconnected devices equipped with sensors (such as wearable tech or home automation devices) that can interact with each other to perform various tasks and functions?",
    "options": [
      {
        "text": "ICS",
        "correct": false
      },
      {
        "text": "PAN",
        "correct": false
      },
      {
        "text": "IoT",
        "correct": true
      },
      {
        "text": "SoC",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "2.4 - DNS & DHCP",
    "type": "SELECT",
    "question": "Which DNS database record type returns a 32-bit IP address?",
    "options": [
      {
        "text": "MX",
        "correct": false
      },
      {
        "text": "AAAA",
        "correct": false
      },
      {
        "text": "CNAME",
        "correct": false
      },
      {
        "text": "A",
        "correct": true
      },
      {
        "text": "PTR",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "2.4 - DNS & DHCP",
    "type": "SELECT",
    "question": "The DNS AAAA record maps a hostname to:",
    "options": [
      {
        "text": "IPv4 address",
        "correct": false
      },
      {
        "text": "Mail server",
        "correct": false
      },
      {
        "text": "IPv6 address",
        "correct": true
      },
      {
        "text": "Canonical name",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "2.4 - DNS & DHCP",
    "type": "SELECT",
    "question": "Which DNS database record type allows multiple domain names to resolve to the same IP address?",
    "options": [
      {
        "text": "MX",
        "correct": false
      },
      {
        "text": "CNAME",
        "correct": true
      },
      {
        "text": "AAAA",
        "correct": false
      },
      {
        "text": "PTR",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "2.4 - DNS & DHCP",
    "type": "SELECT",
    "question": "Which of the DNS database records listed below maps a domain name to a list of mail servers for that domain?",
    "options": [
      {
        "text": "SPF",
        "correct": false
      },
      {
        "text": "NS",
        "correct": false
      },
      {
        "text": "MX",
        "correct": true
      },
      {
        "text": "PTR",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "2.4 - DNS & DHCP",
    "type": "SELECT",
    "question": "Which of the following is used to sign an outbound email message with a digital signature?",
    "options": [
      {
        "text": "SPF",
        "correct": false
      },
      {
        "text": "DKIM",
        "correct": true
      },
      {
        "text": "DMARC",
        "correct": false
      },
      {
        "text": "PEM",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "2.4 - DNS & DHCP",
    "type": "SELECT",
    "question": "Which of the answers listed below refers to an email authentication mechanism that allows domain owners to specify, via DNS records, which IP addresses are authorized to send emails on behalf of their domain?",
    "options": [
      {
        "text": "DMARC",
        "correct": false
      },
      {
        "text": "PEM",
        "correct": false
      },
      {
        "text": "DKIM",
        "correct": false
      },
      {
        "text": "SPF",
        "correct": true
      }
    ]
  },
  {
    "unitTitle": "2.4 - DNS & DHCP",
    "type": "SELECT",
    "question": "Which of the following acronyms refers to a policy framework that allows domain owners to specify how email receivers should handle messages that fail authentication checks?",
    "options": [
      {
        "text": "DKIM",
        "correct": false
      },
      {
        "text": "SPF",
        "correct": false
      },
      {
        "text": "PEM",
        "correct": false
      },
      {
        "text": "DMARC",
        "correct": true
      }
    ]
  },
  {
    "unitTitle": "2.4 - DNS & DHCP",
    "type": "SELECT",
    "question": "The duration for which a DHCP client is authorized to use a dynamically assigned IP address from a DHCP server is known as:",
    "options": [
      {
        "text": "Allocation",
        "correct": false
      },
      {
        "text": "Lease",
        "correct": true
      },
      {
        "text": "Interval",
        "correct": false
      },
      {
        "text": "Reservation",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "2.4 - DNS & DHCP",
    "type": "SELECT",
    "question": "What is the standard DHCP term for a permanent IP address assignment made by the server to a specific device?",
    "options": [
      {
        "text": "Binding",
        "correct": false
      },
      {
        "text": "Fixed lease",
        "correct": false
      },
      {
        "text": "Pinning",
        "correct": false
      },
      {
        "text": "Reservation",
        "correct": true
      }
    ]
  },
  {
    "unitTitle": "2.4 - DNS & DHCP",
    "type": "SELECT",
    "question": "What is the correct DHCP term for the defined pool of IP addresses that a DHCP server can assign to clients?",
    "options": [
      {
        "text": "Range",
        "correct": false
      },
      {
        "text": "Block",
        "correct": false
      },
      {
        "text": "Scope",
        "correct": true
      },
      {
        "text": "Group",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "2.4 - DNS & DHCP",
    "type": "SELECT",
    "question": "A DHCP server's IP exclusion configuration option allows network administrators to remove a single IP address or a range of IP addresses from the pool of addresses automatically assigned to requesting DHCP clients. IP exclusion prevents DHCP clients from receiving IP addresses that are statically assigned to critical network devices, such as servers or wireless printers.",
    "options": [
      {
        "text": "True",
        "correct": true
      },
      {
        "text": "False",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "2.5 - Network Devices",
    "type": "SELECT",
    "question": "Which of the terms listed below refers to a logical grouping of computers that allows hosts to communicate as if they are on the same broadcast domain, regardless of their physical location?",
    "options": [
      {
        "text": "VPN",
        "correct": false
      },
      {
        "text": "Intranet",
        "correct": false
      },
      {
        "text": "Screened subnet",
        "correct": false
      },
      {
        "text": "VLAN",
        "correct": true
      }
    ]
  },
  {
    "unitTitle": "2.5 - Network Devices",
    "type": "SELECT",
    "question": "A system that uses a public network (such as the Internet) to create secure, encrypted connections between remote locations is called:",
    "options": [
      {
        "text": "WWAN",
        "correct": false
      },
      {
        "text": "VPN",
        "correct": true
      },
      {
        "text": "PAN",
        "correct": false
      },
      {
        "text": "VLAN",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "2.5 - Network Devices",
    "type": "SELECT",
    "question": "A networking hardware device connecting wireless devices to a wired network is referred to as a(n):",
    "options": [
      {
        "text": "Wi-Fi extender",
        "correct": false
      },
      {
        "text": "Network bridge",
        "correct": false
      },
      {
        "text": "Access point",
        "correct": true
      },
      {
        "text": "Media converter",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "2.5 - Network Devices",
    "type": "SELECT",
    "question": "A simple device consisting of multiple connector blocks and ports used for copper cable management is known as:",
    "options": [
      {
        "text": "Cable splitter",
        "correct": false
      },
      {
        "text": "Patch panel",
        "correct": true
      },
      {
        "text": "Ethernet hub",
        "correct": false
      },
      {
        "text": "Cable distribution unit",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "2.5 - Network Devices",
    "type": "SELECT",
    "question": "Which of the following answers refers to a hardware security device or software application that monitors and controls both incoming and outgoing network traffic based on predetermined security rules?",
    "options": [
      {
        "text": "Proxy server",
        "correct": false
      },
      {
        "text": "Malware scanner",
        "correct": false
      },
      {
        "text": "Firewall",
        "correct": true
      },
      {
        "text": "Content filter",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "2.5 - Network Devices",
    "type": "SELECT",
    "question": "The IEEE 802.3 standards for Power over Ethernet (PoE) provide varying levels of power to support different types of devices based on their energy needs. IEEE 802.3af (PoE) delivers up to 15.4W per port, making it ideal for low-power devices such as basic IP phones, wireless access points, and standard security cameras. IEEE 802.3at (PoE+) increases power delivery to 25.5W per port, supporting devices like PTZ cameras and high-performance access points that require additional wattage for advanced features. The IEEE 802.3bt (PoE++) standard further expands power capabilities, where Type 3 supports up to 60W per port and Type 4 extends this to 100W per port, enabling support for higher-power devices such as LED lighting, building automation systems, and certain computing devices, all while transmitting both power and data over a single Ethernet cable.",
    "options": [
      {
        "text": "True",
        "correct": true
      },
      {
        "text": "False",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "2.5 - Network Devices",
    "type": "SELECT",
    "question": "Which device enables a network switch without built-in PoE support to deliver power over Ethernet?",
    "options": [
      {
        "text": "PoE converter",
        "correct": false
      },
      {
        "text": "PoE adapter",
        "correct": false
      },
      {
        "text": "PoE injector",
        "correct": true
      },
      {
        "text": "PoE extender",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "2.5 - Network Devices",
    "type": "SELECT",
    "question": "Which term describes the use of cable modems for Internet access over a standard cable television infrastructure?",
    "options": [
      {
        "text": "Dial-up",
        "correct": false
      },
      {
        "text": "Cable broadband",
        "correct": true
      },
      {
        "text": "Frame relay",
        "correct": false
      },
      {
        "text": "Metro-Ethernet",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "2.5 - Network Devices",
    "type": "SELECT",
    "question": "Which type of fiber-optic equipment is typically located at a demarcation point?",
    "options": [
      {
        "text": "MDI",
        "correct": false
      },
      {
        "text": "IDF",
        "correct": false
      },
      {
        "text": "ONT",
        "correct": true
      },
      {
        "text": "MDF",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "2.5 - Network Devices",
    "type": "SELECT",
    "question": "Which of the answers listed below refers to a computer's hardware component designed for enabling network access?",
    "options": [
      {
        "text": "CPU",
        "correct": false
      },
      {
        "text": "PSU",
        "correct": false
      },
      {
        "text": "NIC",
        "correct": true
      },
      {
        "text": "GPU",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "2.6 - IP Addresses",
    "type": "SELECT",
    "question": "Which of the following refers to a unique, 48-bit identifier used as a physical network address?",
    "options": [
      {
        "text": "SSID",
        "correct": false
      },
      {
        "text": "IP",
        "correct": false
      },
      {
        "text": "GUID",
        "correct": false
      },
      {
        "text": "MAC",
        "correct": true
      }
    ]
  },
  {
    "unitTitle": "2.6 - IP Addresses",
    "type": "SELECT",
    "question": "An IPv4 address consists of:",
    "options": [
      {
        "text": "32 bits",
        "correct": true
      },
      {
        "text": "48 bits",
        "correct": false
      },
      {
        "text": "64 bits",
        "correct": false
      },
      {
        "text": "128 bits",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "2.6 - IP Addresses",
    "type": "SELECT",
    "question": "IPv4 addresses are expressed with the use of:",
    "options": [
      {
        "text": "Octagonal numbers",
        "correct": false
      },
      {
        "text": "Binary numbers",
        "correct": false
      },
      {
        "text": "Hexadecimal numbers",
        "correct": false
      },
      {
        "text": "Decimal numbers",
        "correct": true
      }
    ]
  },
  {
    "unitTitle": "2.6 - IP Addresses",
    "type": "MULTI_SELECT",
    "question": "Which of the answers listed below refer to private IP addresses? (Select 3 answers)",
    "options": [
      {
        "text": "Assigned within a home or business network for internal communication",
        "correct": true
      },
      {
        "text": "Used for devices that need to communicate directly with the Internet and are routable through the global internet infrastructure",
        "correct": false
      },
      {
        "text": "Cannot be routed over the public Internet and are only valid within the confines of a local network",
        "correct": true
      },
      {
        "text": "Unique across the entire Internet, ensuring that devices can be identified and located globally",
        "correct": false
      },
      {
        "text": "Can be reused across different networks (i.e., they do not need to be unique globally)",
        "correct": true
      },
      {
        "text": "Assigned by ISPs to devices for communication over the Internet",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "2.6 - IP Addresses",
    "type": "MULTI_SELECT",
    "question": "Which of the following answers refer to the characteristic features of the 10.0.0.0 - 10.255.255.255 (10.0.0.0/8) IPv4 address space? (Select 2 answers)",
    "options": [
      {
        "text": "Class A range",
        "correct": true
      },
      {
        "text": "Public IP address range",
        "correct": false
      },
      {
        "text": "Class B range",
        "correct": false
      },
      {
        "text": "Non-routable (private) IP address range",
        "correct": true
      },
      {
        "text": "Class C range",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "2.6 - IP Addresses",
    "type": "SELECT",
    "question": "An IPv6 address consists of:",
    "options": [
      {
        "text": "32 bits",
        "correct": false
      },
      {
        "text": "48 bits",
        "correct": false
      },
      {
        "text": "64 bits",
        "correct": false
      },
      {
        "text": "128 bits",
        "correct": true
      }
    ]
  },
  {
    "unitTitle": "2.6 - IP Addresses",
    "type": "SELECT",
    "question": "IPv6 addresses are expressed with the use of:",
    "options": [
      {
        "text": "Decimal numbers",
        "correct": false
      },
      {
        "text": "Hexadecimal numbers",
        "correct": true
      },
      {
        "text": "Binary numbers",
        "correct": false
      },
      {
        "text": "Octagonal numbers",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "2.6 - IP Addresses",
    "type": "SELECT",
    "question": "IPv6 was primarily developed to mitigate the issue of:",
    "options": [
      {
        "text": "Address exhaustion",
        "correct": true
      },
      {
        "text": "Outdated protocols",
        "correct": false
      },
      {
        "text": "Routing limitations",
        "correct": false
      },
      {
        "text": "Network congestion",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "2.6 - IP Addresses",
    "type": "SELECT",
    "question": "APIPA allows a Windows host to self-configure an IPv4 address and subnet mask when a DHCP server is unavailable. APIPA uses the address block range from 169.254.0.0 to 169.254.255.255. APIPA-assigned addresses are valid only for communication within the network segment to which the host is connected. A host with an APIPA-assigned address cannot connect to the Internet.",
    "options": [
      {
        "text": "True",
        "correct": true
      },
      {
        "text": "False",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "2.6 - IP Addresses",
    "type": "SELECT",
    "question": "A subnet mask is a 32-bit number that divides an IP address into network and host portions, determining the size of a network.",
    "options": [
      {
        "text": "True",
        "correct": true
      },
      {
        "text": "False",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "2.6 - IP Addresses",
    "type": "SELECT",
    "question": "In a network using subnets, the term \"Default gateway\" refers to a network device (router) that enables exchange of data between hosts residing in different subnets.",
    "options": [
      {
        "text": "True",
        "correct": true
      },
      {
        "text": "False",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "2.7 - Connection Types",
    "type": "SELECT",
    "question": "What is a key advantage of fiber-optic Internet over other broadband types like DSL or cable?",
    "options": [
      {
        "text": "Offers higher bandwidth and faster speeds with minimal signal loss",
        "correct": true
      },
      {
        "text": "Easier to install in every type of building",
        "correct": false
      },
      {
        "text": "Significantly cheaper to deploy over short distances",
        "correct": false
      },
      {
        "text": "Immune to hacking and cyberattacks due to its physical properties",
        "correct": false
      },
      {
        "text": "Can be easily upgraded to higher speeds without any infrastructure changes",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "2.7 - Connection Types",
    "type": "SELECT",
    "question": "Which of the statements listed below best describes cable Internet connectivity?",
    "options": [
      {
        "text": "Shared bandwidth among users",
        "correct": false
      },
      {
        "text": "Coaxial cabling infrastructure",
        "correct": false
      },
      {
        "text": "High-speed data transmission",
        "correct": false
      },
      {
        "text": "Not reliant on telephone lines",
        "correct": false
      },
      {
        "text": "Often bundled with cable TV",
        "correct": false
      },
      {
        "text": "All of the above",
        "correct": true
      }
    ]
  },
  {
    "unitTitle": "2.7 - Connection Types",
    "type": "SELECT",
    "question": "Which physical medium does DSL primarily use for Internet connectivity?",
    "options": [
      {
        "text": "Fiber-optic cabling",
        "correct": false
      },
      {
        "text": "Coaxial cabling",
        "correct": false
      },
      {
        "text": "Satellite dish",
        "correct": false
      },
      {
        "text": "Copper telephone line",
        "correct": true
      }
    ]
  },
  {
    "unitTitle": "2.7 - Connection Types",
    "type": "SELECT",
    "question": "How does DSL performance typically compare with other Internet connection types like cable and fiber?",
    "options": [
      {
        "text": "DSL typically provides symmetrical upload and download speeds",
        "correct": false
      },
      {
        "text": "DSL generally offers moderate speeds that decline over distance",
        "correct": true
      },
      {
        "text": "DSL offers higher download speeds than cable and fiber",
        "correct": false
      },
      {
        "text": "DSL is immune to network congestion and environmental factors",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "2.7 - Connection Types",
    "type": "SELECT",
    "question": "Which of the following is an advantage of using a cellular Internet connection over wired broadband options like fiber-optic or cable?",
    "options": [
      {
        "text": "Provides unlimited bandwidth for streaming and downloading",
        "correct": false
      },
      {
        "text": "Offers higher speeds than fiber-optic connections",
        "correct": false
      },
      {
        "text": "Requires no installation of physical cables or infrastructure",
        "correct": true
      },
      {
        "text": "Offers guaranteed, symmetrical upload and download speeds",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "2.7 - Connection Types",
    "type": "SELECT",
    "question": "Which of the answers listed below best describes how a WISP network delivers Internet connectivity?",
    "options": [
      {
        "text": "Through the installation of underground fiber-optic cables",
        "correct": false
      },
      {
        "text": "By transmitting radio frequency signals wirelessly from a central tower to subscriber antennas",
        "correct": true
      },
      {
        "text": "Through coaxial cabling infrastructure",
        "correct": false
      },
      {
        "text": "By using satellite dishes to communicate with orbiting satellites",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "2.7 - Connection Types",
    "type": "SELECT",
    "question": "The common limitations of WISP-based connectivity include:",
    "options": [
      {
        "text": "Clear line-of-sight dependency",
        "correct": false
      },
      {
        "text": "Susceptibility to RF interference and environmental factors",
        "correct": false
      },
      {
        "text": "Limited bandwidth capacity relative to wired broadband",
        "correct": false
      },
      {
        "text": "Signal degradation over longer distances",
        "correct": false
      },
      {
        "text": "All of the above",
        "correct": true
      }
    ]
  },
  {
    "unitTitle": "2.7 - Connection Types",
    "type": "SELECT",
    "question": "A type of network connecting computers within a small geographical area such as a building or group of buildings is referred to as:",
    "options": [
      {
        "text": "PAN",
        "correct": false
      },
      {
        "text": "LAN",
        "correct": true
      },
      {
        "text": "MAN",
        "correct": false
      },
      {
        "text": "WAN",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "2.7 - Connection Types",
    "type": "SELECT",
    "question": "A computer network connecting multiple smaller networks over very large geographical areas is known as:",
    "options": [
      {
        "text": "MAN",
        "correct": false
      },
      {
        "text": "LAN",
        "correct": false
      },
      {
        "text": "WMN",
        "correct": false
      },
      {
        "text": "WAN",
        "correct": true
      }
    ]
  },
  {
    "unitTitle": "2.7 - Connection Types",
    "type": "SELECT",
    "question": "The Internet is an example of a large public WAN.",
    "options": [
      {
        "text": "True",
        "correct": true
      },
      {
        "text": "False",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "2.7 - Connection Types",
    "type": "SELECT",
    "question": "A type of limited-range computer network used for data transmission among various types of personal devices is called:",
    "options": [
      {
        "text": "BAN",
        "correct": false
      },
      {
        "text": "PAN",
        "correct": true
      },
      {
        "text": "SAN",
        "correct": false
      },
      {
        "text": "CAN",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "2.7 - Connection Types",
    "type": "SELECT",
    "question": "A computer network connecting multiple LANs over an area of a city is referred to as:",
    "options": [
      {
        "text": "WAN",
        "correct": false
      },
      {
        "text": "SAN",
        "correct": false
      },
      {
        "text": "MAN",
        "correct": true
      },
      {
        "text": "CAN",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "2.7 - Connection Types",
    "type": "SELECT",
    "question": "Which of the following acronyms refers to a dedicated local network consisting of devices that provide centralized data access?",
    "options": [
      {
        "text": "SDN",
        "correct": false
      },
      {
        "text": "NAS",
        "correct": false
      },
      {
        "text": "iSCSI",
        "correct": false
      },
      {
        "text": "SAN",
        "correct": true
      }
    ]
  },
  {
    "unitTitle": "2.7 - Connection Types",
    "type": "SELECT",
    "question": "Which term correctly describes a local network consisting of multiple computers and peripheral devices that communicate with each other using high-frequency radio waves across the area of a building or campus?",
    "options": [
      {
        "text": "WPAN",
        "correct": false
      },
      {
        "text": "WMAN",
        "correct": false
      },
      {
        "text": "WLAN",
        "correct": true
      },
      {
        "text": "WWAN",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "2.8 - Network Tools",
    "type": "SELECT",
    "question": "During the process of network cable termination, a crimper tool is used for attaching connectors onto cables by compressing the connector's metal contacts onto the exposed wires.",
    "options": [
      {
        "text": "True",
        "correct": true
      },
      {
        "text": "False",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "2.8 - Network Tools",
    "type": "SELECT",
    "question": "Which tool would be the most appropriate for removing electrical insulation cover from electric wires?",
    "options": [
      {
        "text": "Needle-nose pliers",
        "correct": false
      },
      {
        "text": "Crimper",
        "correct": false
      },
      {
        "text": "Snips",
        "correct": false
      },
      {
        "text": "Cable stripper",
        "correct": true
      }
    ]
  },
  {
    "unitTitle": "2.8 - Network Tools",
    "type": "SELECT",
    "question": "A Wi-Fi analyzer is not designed for:",
    "options": [
      {
        "text": "Measuring the strength of the Wi-Fi signal",
        "correct": false
      },
      {
        "text": "Detecting interference from other devices or networks",
        "correct": false
      },
      {
        "text": "Capturing and inspecting network traffic data",
        "correct": true
      },
      {
        "text": "Analyzing wireless channel usage",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "2.8 - Network Tools",
    "type": "SELECT",
    "question": "Which hardware tool is specifically designed to trace and identify individual wires within a cable bundle?",
    "options": [
      {
        "text": "Cable certifier",
        "correct": false
      },
      {
        "text": "Line tester",
        "correct": false
      },
      {
        "text": "Toner & probe kit",
        "correct": true
      },
      {
        "text": "Wire mapper",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "2.8 - Network Tools",
    "type": "SELECT",
    "question": "Which of the tools listed below is used for attaching network cables to a patch panel?",
    "options": [
      {
        "text": "Cable crimper",
        "correct": false
      },
      {
        "text": "Punchdown tool",
        "correct": true
      },
      {
        "text": "Cable certifier",
        "correct": false
      },
      {
        "text": "Needle-nose pliers",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "2.8 - Network Tools",
    "type": "SELECT",
    "question": "Which of the following answers refers to a hardware tool used to verify the integrity and connectivity of network cables?",
    "options": [
      {
        "text": "Cable tester",
        "correct": true
      },
      {
        "text": "Toner & probe kit",
        "correct": false
      },
      {
        "text": "Signal tracer",
        "correct": false
      },
      {
        "text": "Bandwidth tester",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "2.8 - Network Tools",
    "type": "SELECT",
    "question": "Which hardware tool is used to test the functionality of a NIC?",
    "options": [
      {
        "text": "Signal tracer",
        "correct": false
      },
      {
        "text": "Continuity tester",
        "correct": false
      },
      {
        "text": "Multimeter",
        "correct": false
      },
      {
        "text": "Loopback plug",
        "correct": true
      }
    ]
  },
  {
    "unitTitle": "2.8 - Network Tools",
    "type": "SELECT",
    "question": "Which device enables network traffic monitoring without interrupting the data flow?",
    "options": [
      {
        "text": "Transceiver",
        "correct": false
      },
      {
        "text": "Repeater",
        "correct": false
      },
      {
        "text": "Ethernet adapter",
        "correct": false
      },
      {
        "text": "Network tap",
        "correct": true
      }
    ]
  },
  {
    "unitTitle": "3.1 - Displays",
    "type": "SELECT",
    "question": "Which of the answers listed below refers to a display technology most commonly used in modern computing devices?",
    "options": [
      {
        "text": "LCD",
        "correct": true
      },
      {
        "text": "OLED",
        "correct": false
      },
      {
        "text": "Plasma",
        "correct": false
      },
      {
        "text": "CRT",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "3.1 - Displays",
    "type": "SELECT",
    "question": "IPS, TN, VA, and OLED are all implementations of LCD display technology.",
    "options": [
      {
        "text": "True",
        "correct": false
      },
      {
        "text": "False",
        "correct": true
      }
    ]
  },
  {
    "unitTitle": "3.1 - Displays",
    "type": "SELECT",
    "question": "Which of the following devices is capable of performing both input and output functions?",
    "options": [
      {
        "text": "Game controller",
        "correct": false
      },
      {
        "text": "Barcode reader",
        "correct": false
      },
      {
        "text": "Touch screen",
        "correct": true
      },
      {
        "text": "Graphics tablet",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "3.1 - Displays",
    "type": "MULTI_SELECT",
    "question": "Which of the following answers describe key functions of an inverter? (Select 3 answers)",
    "options": [
      {
        "text": "Converts DC power into AC power",
        "correct": true
      },
      {
        "text": "Essential for operating DC-powered devices from AC sources",
        "correct": false
      },
      {
        "text": "Used for supplying voltage to backlights in older types of LCD panels",
        "correct": true
      },
      {
        "text": "Converts AC power into DC power",
        "correct": false
      },
      {
        "text": "Essential for operating AC-powered devices from DC sources",
        "correct": true
      },
      {
        "text": "Used for supplying voltage to backlights in OLED displays",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "3.1 - Displays",
    "type": "SELECT",
    "question": "Which of the following correctly defines \"pixel density\" as a display attribute?",
    "options": [
      {
        "text": "The number of individual pixels packed into a given area of the screen",
        "correct": true
      },
      {
        "text": "The number of times the screen updates the image per second",
        "correct": false
      },
      {
        "text": "The total number of pixels displayed on the screen",
        "correct": false
      },
      {
        "text": "The range of colors a display can reproduce",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "3.1 - Displays",
    "type": "SELECT",
    "question": "Which of the following correctly defines \"refresh rate\" as a display attribute?",
    "options": [
      {
        "text": "The number of individual pixels packed into a given area of the screen",
        "correct": false
      },
      {
        "text": "The number of times the screen updates the image per second",
        "correct": true
      },
      {
        "text": "The total number of pixels displayed on the screen",
        "correct": false
      },
      {
        "text": "The range of colors a display can reproduce",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "3.1 - Displays",
    "type": "SELECT",
    "question": "Which of the following correctly defines \"screen resolution\" as a display attribute?",
    "options": [
      {
        "text": "The number of individual pixels packed into a given area of the screen",
        "correct": false
      },
      {
        "text": "The number of times the screen updates the image per second",
        "correct": false
      },
      {
        "text": "The total number of pixels displayed on the screen",
        "correct": true
      },
      {
        "text": "The range of colors a display can reproduce",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "3.1 - Displays",
    "type": "SELECT",
    "question": "Which of the following correctly defines \"color gamut\" as a display attribute?",
    "options": [
      {
        "text": "The number of individual pixels packed into a given area of the screen",
        "correct": false
      },
      {
        "text": "The number of times the screen updates the image per second",
        "correct": false
      },
      {
        "text": "The total number of pixels displayed on the screen",
        "correct": false
      },
      {
        "text": "The range of colors a display can reproduce",
        "correct": true
      }
    ]
  },
  {
    "unitTitle": "3.2 - Cables Part 1",
    "type": "SELECT",
    "question": "Which type of twisted-pair copper cabling takes advantage of an additional protective cover reducing signal interference from outside sources?",
    "options": [
      {
        "text": "Coax",
        "correct": false
      },
      {
        "text": "STP",
        "correct": true
      },
      {
        "text": "UTP",
        "correct": false
      },
      {
        "text": "Twinax",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "3.2 - Cables Part 1",
    "type": "SELECT",
    "question": "A key feature of all twisted-pair cabling types is that wires inside the cable are grouped into pairs, and the wires in each pair are twisted around each other to reduce signal interference from adjacent wire pairs.",
    "options": [
      {
        "text": "True",
        "correct": true
      },
      {
        "text": "False",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "3.2 - Cables Part 1",
    "type": "SELECT",
    "question": "Which of the following answers does not refer to UTP cabling?",
    "options": [
      {
        "text": "Used in Ethernet networks and telephone systems",
        "correct": false
      },
      {
        "text": "Characterized by low cost and ease of installation",
        "correct": false
      },
      {
        "text": "Shielded to reduce external interference",
        "correct": true
      },
      {
        "text": "In Ethernet networks, installed with RJ45 connector type",
        "correct": false
      },
      {
        "text": "Classified as twisted-pair copper cabling",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "3.2 - Cables Part 1",
    "type": "SELECT",
    "question": "A type of enclosed space in a building, such as the one between a dropped ceiling and the structural ceiling, used for air handling, is commonly referred to as a plenum space. A special type of cabling with a fire-retardant jacket, designed for use in that space, is known as plenum-rated cabling.",
    "options": [
      {
        "text": "True",
        "correct": true
      },
      {
        "text": "False",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "3.2 - Cables Part 2",
    "type": "SELECT",
    "question": "USB 2.0 (a.k.a. Hi-Speed USB) specifies the maximum data transfer rate of:",
    "options": [
      {
        "text": "120 Mbps",
        "correct": false
      },
      {
        "text": "240 Mbps",
        "correct": false
      },
      {
        "text": "480 Mbps",
        "correct": true
      },
      {
        "text": "960 Mbps",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "3.2 - Cables Part 2",
    "type": "SELECT",
    "question": "What is the maximum allowable cable length for USB 2.0?",
    "options": [
      {
        "text": "3 meters",
        "correct": false
      },
      {
        "text": "4.5 meters",
        "correct": false
      },
      {
        "text": "5 meters",
        "correct": true
      },
      {
        "text": "10 meters",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "3.2 - Cables Part 2",
    "type": "SELECT",
    "question": "USB 3.1 improves over its predecessors by supporting a maximum data transfer rate of:",
    "options": [
      {
        "text": "6 Gbps",
        "correct": false
      },
      {
        "text": "10 Gbps",
        "correct": true
      },
      {
        "text": "12 Gbps",
        "correct": false
      },
      {
        "text": "20 Gbps",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "3.2 - Cables Part 2",
    "type": "SELECT",
    "question": "What is the maximum theoretical data transfer rate supported by USB 3.2?",
    "options": [
      {
        "text": "10 Gbps",
        "correct": false
      },
      {
        "text": "20 Gbps",
        "correct": true
      },
      {
        "text": "30 Gbps",
        "correct": false
      },
      {
        "text": "40 Gbps",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "3.2 - Cables Part 2",
    "type": "SELECT",
    "question": "What is the maximum practical cable length for a typical USB 3.x connection?",
    "options": [
      {
        "text": "1 meter",
        "correct": false
      },
      {
        "text": "3 meters",
        "correct": true
      },
      {
        "text": "4.5 meters",
        "correct": false
      },
      {
        "text": "5 meters",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "3.2 - Cables Part 2",
    "type": "SELECT",
    "question": "Which of the answers listed below refers to an older type of serial cable used to connect modems, printers, mice, and other peripheral devices?",
    "options": [
      {
        "text": "RJ11",
        "correct": false
      },
      {
        "text": "RG-6",
        "correct": false
      },
      {
        "text": "RS-232",
        "correct": true
      },
      {
        "text": "RG-59",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "3.2 - Cables Part 2",
    "type": "SELECT",
    "question": "Thunderbolt 1 uses two separate 10 Gbps data channels, providing a combined maximum throughput of 20 Gbps. However, a single task may use only one of these channels at a time, limiting the speed to 10 Gbps per task. Thunderbolt 2 bonds the two channels into one unified 20 Gbps connection, allowing one high-bandwidth task to utilize the full capacity, while Thunderbolt 3 further increases this overall throughput to 40 Gbps.",
    "options": [
      {
        "text": "True",
        "correct": true
      },
      {
        "text": "False",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "3.2 - Cables Part 2",
    "type": "SELECT",
    "question": "What is the maximum allowable length for a Thunderbolt copper cable?",
    "options": [
      {
        "text": "Up to 3 meters",
        "correct": true
      },
      {
        "text": "Up to 6 meters",
        "correct": false
      },
      {
        "text": "Up to 10 meters",
        "correct": false
      },
      {
        "text": "Up to 15 meters",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "3.2 - Cables Part 2",
    "type": "SELECT",
    "question": "The fiber-optic Thunderbolt interface allows for a maximum cable length of:",
    "options": [
      {
        "text": "30 meters",
        "correct": false
      },
      {
        "text": "40 meters",
        "correct": false
      },
      {
        "text": "50 meters",
        "correct": false
      },
      {
        "text": "60 meters",
        "correct": true
      }
    ]
  },
  {
    "unitTitle": "3.2 - Cables Part 2",
    "type": "SELECT",
    "question": "Which of the following answers best describes the signal capabilities of DisplayPort?",
    "options": [
      {
        "text": "Analog video",
        "correct": false
      },
      {
        "text": "Audio only",
        "correct": false
      },
      {
        "text": "Digital audio/video",
        "correct": true
      },
      {
        "text": "Video only",
        "correct": false
      },
      {
        "text": "Analog audio",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "3.2 - Cables Part 2",
    "type": "SELECT",
    "question": "Which of the DVI versions listed below does not provide support for digital signal transmission?",
    "options": [
      {
        "text": "DVI-D",
        "correct": false
      },
      {
        "text": "DVI-A",
        "correct": true
      },
      {
        "text": "DVI-I",
        "correct": false
      },
      {
        "text": "DVI-A/D",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "3.2 - Cables Part 2",
    "type": "SELECT",
    "question": "Which DVI type does not provide support for analog signal transmission?",
    "options": [
      {
        "text": "DVI-D",
        "correct": true
      },
      {
        "text": "DVI-A",
        "correct": false
      },
      {
        "text": "DVI-I",
        "correct": false
      },
      {
        "text": "DVI-A/D",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "3.2 - Cables Part 2",
    "type": "SELECT",
    "question": "DVI-I provides support for both digital and analog video signal transmission.",
    "options": [
      {
        "text": "True",
        "correct": true
      },
      {
        "text": "False",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "3.2 - Cables Part 2",
    "type": "SELECT",
    "question": "USB-C supports Alternate Mode (Alt Mode), which allows it to transmit video signals using protocols such as DisplayPort or HDMI. Through Alt Mode, USB-C can deliver video to external displays like monitors or TVs, offering the same functionality as dedicated video cables. To connect to most external displays, USB-C requires a compatible adapter or cable, such as USB-C to DisplayPort or USB-C to HDMI.",
    "options": [
      {
        "text": "True",
        "correct": true
      },
      {
        "text": "False",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "3.2 - Cables Part 2",
    "type": "SELECT",
    "question": "The SATA interface specification defines a power connector consisting of:",
    "options": [
      {
        "text": "12 pins",
        "correct": false
      },
      {
        "text": "15 pins",
        "correct": true
      },
      {
        "text": "20 pins",
        "correct": false
      },
      {
        "text": "24 pins",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "3.2 - Cables Part 2",
    "type": "SELECT",
    "question": "A single SATA data cable can be used to connect a motherboard slot with:",
    "options": [
      {
        "text": "Up to 3 devices",
        "correct": false
      },
      {
        "text": "Up to 2 devices",
        "correct": false
      },
      {
        "text": "Only 1 device",
        "correct": true
      },
      {
        "text": "Up to 4 devices",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "3.2 - Cables Part 2",
    "type": "SELECT",
    "question": "The SATA interface specification defines a data cable connector consisting of:",
    "options": [
      {
        "text": "4 pins",
        "correct": false
      },
      {
        "text": "6 pins",
        "correct": false
      },
      {
        "text": "7 pins",
        "correct": true
      },
      {
        "text": "8 pins",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "3.2 - Connectors",
    "type": "SELECT",
    "question": "Which of the answers listed below describes the functionality offered by a cable adapter?",
    "options": [
      {
        "text": "Hot swap capability for connected devices",
        "correct": false
      },
      {
        "text": "Single-port-to-multi-port expansion",
        "correct": false
      },
      {
        "text": "Connector form factor adjustment",
        "correct": true
      },
      {
        "text": "Signal amplification for extended range",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "3.2 - Connectors",
    "type": "SELECT",
    "question": "A termination device (or module) that secures individual wires directly onto metal contacts to form permanent, solderless connections is known as:",
    "options": [
      {
        "text": "Punchdown block",
        "correct": true
      },
      {
        "text": "Keystone wall plate",
        "correct": false
      },
      {
        "text": "Patch panel",
        "correct": false
      },
      {
        "text": "Wire junction box",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "3.2 - Connectors",
    "type": "SELECT",
    "question": "Which of the following answers applies to USB-C connector?",
    "options": [
      {
        "text": "Symmetrical connector design",
        "correct": false
      },
      {
        "text": "Bi-directional power and data transfer",
        "correct": false
      },
      {
        "text": "Video output capability (DisplayPort/HDMI over USB-C)",
        "correct": false
      },
      {
        "text": "High data transfer speeds",
        "correct": false
      },
      {
        "text": "All of the above",
        "correct": true
      }
    ]
  },
  {
    "unitTitle": "3.2 - Connectors",
    "type": "SELECT",
    "question": "What is the name of the most common connector type used for providing power to various hardware components inside a computer case?",
    "options": [
      {
        "text": "D-sub connector",
        "correct": false
      },
      {
        "text": "Mini-DIN connector",
        "correct": false
      },
      {
        "text": "Berg connector",
        "correct": false
      },
      {
        "text": "Molex connector",
        "correct": true
      }
    ]
  },
  {
    "unitTitle": "3.2 - Connectors",
    "type": "SELECT",
    "question": "Which of the answers listed below refers to a proprietary 8-pin connector used for charging, data transfer, and audio output in iOS devices?",
    "options": [
      {
        "text": "FireWire",
        "correct": false
      },
      {
        "text": "Thunderbolt",
        "correct": false
      },
      {
        "text": "Doc Connector",
        "correct": false
      },
      {
        "text": "Lightning",
        "correct": true
      }
    ]
  },
  {
    "unitTitle": "3.2 - Connectors",
    "type": "SELECT",
    "question": "Which of the following answers refers to a serial communication copper connector often found on older PCs, networking equipment, and industrial hardware?",
    "options": [
      {
        "text": "RG-6",
        "correct": false
      },
      {
        "text": "PS/2",
        "correct": false
      },
      {
        "text": "RG-59",
        "correct": false
      },
      {
        "text": "DB-9",
        "correct": true
      }
    ]
  },
  {
    "unitTitle": "3.3 - Memory",
    "type": "SELECT",
    "question": "What is the most common memory module form factor used in laptops?",
    "options": [
      {
        "text": "ECC RAM",
        "correct": false
      },
      {
        "text": "DIMM",
        "correct": false
      },
      {
        "text": "SODIMM",
        "correct": true
      },
      {
        "text": "CRIMM",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "3.3 - Memory",
    "type": "SELECT",
    "question": "Which type of RAM features separate electrical contacts on each side of the module?",
    "options": [
      {
        "text": "SRAM",
        "correct": false
      },
      {
        "text": "DIMM",
        "correct": true
      },
      {
        "text": "DRAM",
        "correct": false
      },
      {
        "text": "SIMM",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "3.3 - Memory",
    "type": "SELECT",
    "question": "The placement of a notch on the RAM module contact surface ensures proper alignment of the module with the memory bank on the motherboard and prevents the installation of incompatible memory types.",
    "options": [
      {
        "text": "True",
        "correct": true
      },
      {
        "text": "False",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "3.3 - Memory",
    "type": "SELECT",
    "question": "The term \"Synchronous Dynamic Random-Access Memory (SDRAM)\" refers to a broad category of DRAM modules that rely on the signal sent by the system clock in order to coordinate their functioning with other internal PC components.",
    "options": [
      {
        "text": "True",
        "correct": true
      },
      {
        "text": "False",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "3.3 - Memory",
    "type": "SELECT",
    "question": "SDRAM's backward compatibility feature provides a convenient way to build PCs using different types of SDRAM modules.",
    "options": [
      {
        "text": "True",
        "correct": false
      },
      {
        "text": "False",
        "correct": true
      }
    ]
  },
  {
    "unitTitle": "3.3 - Memory",
    "type": "SELECT",
    "question": "Which of the answers listed below refers to a valid SDRAM module combination that can be installed on a single PC motherboard?",
    "options": [
      {
        "text": "DDR3 + DDR2",
        "correct": false
      },
      {
        "text": "DDR4 + DDR3",
        "correct": false
      },
      {
        "text": "DDR5 + DDR4",
        "correct": false
      },
      {
        "text": "Any of the above",
        "correct": false
      },
      {
        "text": "None of the above",
        "correct": true
      }
    ]
  },
  {
    "unitTitle": "3.3 - Memory",
    "type": "SELECT",
    "question": "Certain types of RAM use an additional bit to detect whether a data error has occurred. This extra bit stores information about the count of bits set to 1 in a given data string (typically one byte). Examining the value of this bit at different stages of processing allows for the detection of data corruption. What is the name of that extra bit?",
    "options": [
      {
        "text": "Checksum",
        "correct": false
      },
      {
        "text": "Digest",
        "correct": false
      },
      {
        "text": "CRC",
        "correct": false
      },
      {
        "text": "Parity bit",
        "correct": true
      }
    ]
  },
  {
    "unitTitle": "3.3 - Memory",
    "type": "SELECT",
    "question": "ECC type RAM:",
    "options": [
      {
        "text": "Can only detect errors, but does not have the capability to correct them",
        "correct": false
      },
      {
        "text": "Refers to parity RAM (the two terms are interchangeable)",
        "correct": false
      },
      {
        "text": "Offers better performance in terms of speed when compared to a non-ECC type of RAM",
        "correct": false
      },
      {
        "text": "Can detect and correct errors",
        "correct": true
      }
    ]
  },
  {
    "unitTitle": "3.3 - Memory",
    "type": "SELECT",
    "question": "ECC RAM finds extensive use in environments where data integrity is essential, such as in critical infrastructure, high-availability systems, and applications requiring precise error detection and correction. It prioritizes data integrity over cost and performance, making it more expensive and slightly slower than non-ECC RAM in most cases.",
    "options": [
      {
        "text": "True",
        "correct": true
      },
      {
        "text": "False",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "3.3 - Memory",
    "type": "SELECT",
    "question": "The color-coded memory slots on the motherboard indicate that a given motherboard provides support for the multi-channel memory architecture.",
    "options": [
      {
        "text": "True",
        "correct": true
      },
      {
        "text": "False",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "3.4 - Storage Devices",
    "type": "SELECT",
    "question": "The platters in a magnetic hard drive spin at a rate measured in:",
    "options": [
      {
        "text": "Revolutions per second",
        "correct": false
      },
      {
        "text": "Iterations per minute",
        "correct": false
      },
      {
        "text": "Revolutions per minute",
        "correct": true
      },
      {
        "text": "Iterations per second",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "3.4 - Storage Devices",
    "type": "SELECT",
    "question": "What is the maximum RPM value available in modern HDDs?",
    "options": [
      {
        "text": "10000",
        "correct": false
      },
      {
        "text": "5400",
        "correct": false
      },
      {
        "text": "15000",
        "correct": true
      },
      {
        "text": "7200",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "3.4 - Storage Devices",
    "type": "SELECT",
    "question": "Which of the answers listed below refers to a storage media drive form factor for laptop computers?",
    "options": [
      {
        "text": "1.8-inch",
        "correct": false
      },
      {
        "text": "2.5-inch",
        "correct": true
      },
      {
        "text": "3.5-inch",
        "correct": false
      },
      {
        "text": "5.25-inch",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "3.4 - Storage Devices",
    "type": "SELECT",
    "question": "Which of the following answers refers to an HDD form factor for desktops?",
    "options": [
      {
        "text": "1.8-inch",
        "correct": false
      },
      {
        "text": "2.5-inch",
        "correct": false
      },
      {
        "text": "3.5-inch",
        "correct": true
      },
      {
        "text": "5.25-inch",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "3.4 - Storage Devices",
    "type": "MULTI_SELECT",
    "question": "Which of the statements listed below can be used to describe the features of NVMe? (Select 2 answers)",
    "options": [
      {
        "text": "Developed specifically for SSDs",
        "correct": true
      },
      {
        "text": "Uses the PCIe interface for data transfer",
        "correct": true
      },
      {
        "text": "Capped at a maximum data transfer rate of 6 Gbps",
        "correct": false
      },
      {
        "text": "Designed as a general-purpose interface for various hardware devices",
        "correct": false
      },
      {
        "text": "Optimized for multi-drive RAID configurations",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "3.4 - Storage Devices",
    "type": "SELECT",
    "question": "Which of the following answers does not apply to the SATA interface?",
    "options": [
      {
        "text": "Common in 2.5-inch SSDs replacing traditional HDDs",
        "correct": false
      },
      {
        "text": "Widely used in consumer-grade laptops and desktops",
        "correct": false
      },
      {
        "text": "An older interface originally designed for mechanical hard drives",
        "correct": false
      },
      {
        "text": "Capped at a maximum data transfer rate of 6 Gbps",
        "correct": false
      },
      {
        "text": "All of the above statements accurately describe the SATA interface",
        "correct": true
      }
    ]
  },
  {
    "unitTitle": "3.4 - Storage Devices",
    "type": "SELECT",
    "question": "PCIe is a general-purpose, high-speed interface that serves as the backbone for NVMe SSDs and other high-performance hardware devices.",
    "options": [
      {
        "text": "True",
        "correct": true
      },
      {
        "text": "False",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "3.4 - Storage Devices",
    "type": "SELECT",
    "question": "An M.2 key is a notch on the pin contact surface of an M.2 expansion card which prevents its insertion into an incompatible socket. The 12 available M.2 key IDs are letters from A to M which indicate the location of notched pins on the card’s contact surface and designate the type of interface a given card is compatible with. M.2 expansion cards used for solid-state storage applications have key IDs of B and M. The B-keyed M.2 SSD cards take advantage of 2 lanes of a PCIe link (lower read/write speed), the M-keyed M.2 SSDs use 4 PCIe lanes (higher read/write speed). M.2 SSDs with 2 notches on the card’s pin contact surface (B + M) increase their compatibility, as they can be installed in either of the two types of expansion slots on the motherboard.",
    "options": [
      {
        "text": "True",
        "correct": true
      },
      {
        "text": "False",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "3.4 - Storage Devices",
    "type": "SELECT",
    "question": "Which of the answers listed below refers to an older, portable device SSD form factor superseded by M.2?",
    "options": [
      {
        "text": "mSATA",
        "correct": true
      },
      {
        "text": "NVMe",
        "correct": false
      },
      {
        "text": "SATA Express",
        "correct": false
      },
      {
        "text": "mPCIe",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "3.4 - Storage Devices",
    "type": "MULTI_SELECT",
    "question": "Hardware RAID Level 5: (Select 3 answers)",
    "options": [
      {
        "text": "Requires at least 2 drives to implement",
        "correct": false
      },
      {
        "text": "Can withstand the failure of more than one drive",
        "correct": false
      },
      {
        "text": "Is also known as disk striping with double parity",
        "correct": false
      },
      {
        "text": "Requires at least 3 drives to implement",
        "correct": true
      },
      {
        "text": "Offers both increased performance and fault tolerance (a single drive failure does not result in data loss; the array can rebuild the missing data)",
        "correct": true
      },
      {
        "text": "Requires at least 4 drives to implement",
        "correct": false
      },
      {
        "text": "Is also known as disk striping with parity",
        "correct": true
      }
    ]
  },
  {
    "unitTitle": "3.4 - Storage Devices",
    "type": "MULTI_SELECT",
    "question": "Hardware RAID Level 6: (Select 3 answers)",
    "options": [
      {
        "text": "Is also known as disk striping with parity",
        "correct": false
      },
      {
        "text": "Requires at least 4 drives to implement",
        "correct": true
      },
      {
        "text": "Offers increased performance and fault tolerance (up to 2 drive failures can be tolerated without data loss)",
        "correct": true
      },
      {
        "text": "Requires at least 3 drives to implement",
        "correct": false
      },
      {
        "text": "Is also known as disk striping with double parity",
        "correct": true
      },
      {
        "text": "Can continue operating after more than 2 drive failures",
        "correct": false
      },
      {
        "text": "Requires at least 5 drives to implement",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "3.4 - Storage Devices",
    "type": "SELECT",
    "question": "Which of the RAID levels listed below does not provide fault tolerance?",
    "options": [
      {
        "text": "RAID 6",
        "correct": false
      },
      {
        "text": "RAID 10",
        "correct": false
      },
      {
        "text": "RAID 5",
        "correct": false
      },
      {
        "text": "RAID 0",
        "correct": true
      },
      {
        "text": "RAID 1",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "3.4 - Storage Devices",
    "type": "SELECT",
    "question": "In a configuration using the minimum required number of drives, which two of the following RAID levels provide the highest amount of usable storage space?",
    "options": [
      {
        "text": "RAID 1",
        "correct": false
      },
      {
        "text": "RAID 0",
        "correct": false
      },
      {
        "text": "RAID 6",
        "correct": false
      },
      {
        "text": "RAID 10",
        "correct": false
      },
      {
        "text": "RAID 5",
        "correct": true
      }
    ]
  },
  {
    "unitTitle": "3.4 - Storage Devices",
    "type": "SELECT",
    "question": "Which of the RAID levels listed below provides the greatest level of redundancy?",
    "options": [
      {
        "text": "RAID 5",
        "correct": false
      },
      {
        "text": "RAID 6",
        "correct": true
      },
      {
        "text": "RAID 10",
        "correct": false
      },
      {
        "text": "RAID 1",
        "correct": false
      },
      {
        "text": "RAID 0",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "3.4 - Storage Devices",
    "type": "SELECT",
    "question": "Which of the following RAID levels offers the best performance?",
    "options": [
      {
        "text": "RAID 0",
        "correct": true
      },
      {
        "text": "RAID 5",
        "correct": false
      },
      {
        "text": "RAID 1",
        "correct": false
      },
      {
        "text": "RAID 6",
        "correct": false
      },
      {
        "text": "RAID 10",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "3.4 - Storage Devices",
    "type": "SELECT",
    "question": "Due to space limitations, the shift to digital content, and the rise of faster storage alternatives, modern laptops no longer include a built-in version of this storage medium.",
    "options": [
      {
        "text": "M.2 SATA drives",
        "correct": false
      },
      {
        "text": "Optical drives",
        "correct": true
      },
      {
        "text": "PCIe NVMe drives",
        "correct": false
      },
      {
        "text": "eSATA drives",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "3.5 - Motherboards",
    "type": "SELECT",
    "question": "What is the most common motherboard form factor used in desktop PCs?",
    "options": [
      {
        "text": "ATX",
        "correct": true
      },
      {
        "text": "mATX",
        "correct": false
      },
      {
        "text": "ITX",
        "correct": false
      },
      {
        "text": "mITX",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "3.5 - Motherboards",
    "type": "SELECT",
    "question": "Which motherboard form factor would be the optimal choice for a compact or budget-friendly desktop build?",
    "options": [
      {
        "text": "LPX/NLX",
        "correct": false
      },
      {
        "text": "BTX",
        "correct": false
      },
      {
        "text": "E-ATX",
        "correct": false
      },
      {
        "text": "microATX",
        "correct": true
      }
    ]
  },
  {
    "unitTitle": "3.5 - Motherboards",
    "type": "SELECT",
    "question": "Which of the answers listed below refers to a low-power consumption, small form factor motherboard type used in industrial and embedded PC applications?",
    "options": [
      {
        "text": "NLX",
        "correct": false
      },
      {
        "text": "ITX",
        "correct": true
      },
      {
        "text": "ATX",
        "correct": false
      },
      {
        "text": "LPX",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "3.5 - Motherboards",
    "type": "SELECT",
    "question": "Which of the following motherboard form factors is the smallest?",
    "options": [
      {
        "text": "ITX",
        "correct": true
      },
      {
        "text": "E-ATX",
        "correct": false
      },
      {
        "text": "EE-ATX",
        "correct": false
      },
      {
        "text": "microATX",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "3.5 - Motherboards",
    "type": "SELECT",
    "question": "PCIe is a high-speed, serial expansion bus designed as a replacement for:",
    "options": [
      {
        "text": "VGA",
        "correct": false
      },
      {
        "text": "PCI",
        "correct": true
      },
      {
        "text": "IDE",
        "correct": false
      },
      {
        "text": "ATA",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "3.5 - Motherboards",
    "type": "SELECT",
    "question": "In PCIe architecture, a lane is a single, full-duplex, point-to-point serial communication path composed of two pairs of differential signaling wires, where one pair is used for transmitting data and the other pair for receiving data. The PCIe labeling (×1, ×4, ×8, ×12, ×16, and ×32) indicates the number of lanes available in an interface. The throughput of a single lane (as indicated by ×1) is determined by the specific PCIe generation and is typically measured in terms of gigatransfers per second (GT/s) or its equivalent bandwidth in MB/s. The multiplier (×) then provides a straightforward way to calculate the maximum theoretical aggregate bandwidth for the interface.",
    "options": [
      {
        "text": "True",
        "correct": true
      },
      {
        "text": "False",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "3.5 - Motherboards",
    "type": "SELECT",
    "question": "Which of the answers listed below refers to the main power connector used in modern ATX power supplies?",
    "options": [
      {
        "text": "16-pin connector",
        "correct": false
      },
      {
        "text": "20-pin connector",
        "correct": false
      },
      {
        "text": "24-pin connector",
        "correct": true
      },
      {
        "text": "28-pin connector",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "3.5 - Motherboards",
    "type": "SELECT",
    "question": "Which motherboard connector features an L-shape design that prevents its improper insertion?",
    "options": [
      {
        "text": "SATA",
        "correct": true
      },
      {
        "text": "M.2",
        "correct": false
      },
      {
        "text": "eSATA",
        "correct": false
      },
      {
        "text": "PCIe",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "3.5 - Motherboards",
    "type": "SELECT",
    "question": "Adding an eSATA device to a PC can be done either by attaching the device cable's connector directly to the motherboard's integrated I/O panel, plugging it in via eSATA port on a modular bracket mounted on the back of the PC case, or attaching it directly to a dedicated slot on the motherboard.",
    "options": [
      {
        "text": "True",
        "correct": false
      },
      {
        "text": "False",
        "correct": true
      }
    ]
  },
  {
    "unitTitle": "3.5 - Motherboards",
    "type": "SELECT",
    "question": "Inside a PC case, connector cables from a power switch, reset switch, or LEDs on the front/top panel of the case attach to their corresponding slots located on the main power supply unit.",
    "options": [
      {
        "text": "True",
        "correct": false
      },
      {
        "text": "False",
        "correct": true
      }
    ]
  },
  {
    "unitTitle": "3.5 - Motherboards",
    "type": "SELECT",
    "question": "The installation of USB ports located on the front panel of a computer case requires plugging in internal USB cable connectors into compatible groupings of metal pins (a.k.a. headers) on the motherboard.",
    "options": [
      {
        "text": "True",
        "correct": true
      },
      {
        "text": "False",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "3.5 - Motherboards",
    "type": "SELECT",
    "question": "Motherboards used in laptops and mobile devices can be characterized by their proprietary design, which means that replacing a motherboard in such devices typically requires a part designed specifically for the make and model of the device.",
    "options": [
      {
        "text": "True",
        "correct": true
      },
      {
        "text": "False",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "3.5 - Motherboards",
    "type": "SELECT",
    "question": "High-end PC motherboards typically feature microprocessor sockets that are compatible with CPUs from different manufacturers.",
    "options": [
      {
        "text": "True",
        "correct": false
      },
      {
        "text": "False",
        "correct": true
      }
    ]
  },
  {
    "unitTitle": "3.5 - BIOS",
    "type": "SELECT",
    "question": "After completing initial diagnostics and allocating system resources, the startup BIOS program checks for information about secondary storage devices that might contain the OS. The list of these devices and the order in which they are checked can be found and configured in BIOS via:",
    "options": [
      {
        "text": "ACPI settings",
        "correct": false
      },
      {
        "text": "System Configuration utility",
        "correct": false
      },
      {
        "text": "Boot options",
        "correct": true
      },
      {
        "text": "Security tab/menu",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "3.5 - BIOS",
    "type": "SELECT",
    "question": "Which BIOS configuration option helps mitigate a common vector for malware infection?",
    "options": [
      {
        "text": "User password",
        "correct": false
      },
      {
        "text": "Chassis intrusion detection",
        "correct": false
      },
      {
        "text": "Supervisor password",
        "correct": false
      },
      {
        "text": "USB permissions settings",
        "correct": true
      }
    ]
  },
  {
    "unitTitle": "3.5 - BIOS",
    "type": "SELECT",
    "question": "Modern motherboards feature temperature sensors near key components like the CPU and chipset. The BIOS/UEFI firmware periodically polls these sensors to obtain current temperature readings and, according to the configured fan control settings (which can be automatic or user-defined), adjusts the speed of the system's cooling fans.",
    "options": [
      {
        "text": "True",
        "correct": true
      },
      {
        "text": "False",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "3.5 - BIOS",
    "type": "SELECT",
    "question": "Which of the following terms refers to the advanced security feature integrated into modern UEFI firmware that ensures only digitally signed, trusted software is allowed to run during the system’s startup process?",
    "options": [
      {
        "text": "Secure Boot",
        "correct": true
      },
      {
        "text": "Trusted OS Loader",
        "correct": false
      },
      {
        "text": "Boot Guard",
        "correct": false
      },
      {
        "text": "Trusted Boot",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "3.5 - BIOS",
    "type": "SELECT",
    "question": "Which of the following statements does not apply to a BIOS password?",
    "options": [
      {
        "text": "Activated only when entering the BIOS configuration menu",
        "correct": false
      },
      {
        "text": "Restricts access to the BIOS/UEFI setup interface",
        "correct": false
      },
      {
        "text": "Does not interfere with the actual boot process once configured",
        "correct": false
      },
      {
        "text": "Ensures that unauthorized users cannot start the system",
        "correct": true
      },
      {
        "text": "Prevents unauthorized modifications to firmware settings",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "3.5 - BIOS",
    "type": "SELECT",
    "question": "A set of Intel CPU hardware enhancements that enable virtualization is known as:",
    "options": [
      {
        "text": "ESXi",
        "correct": false
      },
      {
        "text": "VT-x",
        "correct": true
      },
      {
        "text": "Xen",
        "correct": false
      },
      {
        "text": "Hyper-V",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "3.5 - BIOS",
    "type": "SELECT",
    "question": "Which of the answers listed below refers to AMD’s CPU hardware virtualization enhancements?",
    "options": [
      {
        "text": "vSphere",
        "correct": false
      },
      {
        "text": "Zen",
        "correct": false
      },
      {
        "text": "AMD-V",
        "correct": true
      },
      {
        "text": "Catalyst",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "3.5 - More Computer Parts",
    "type": "SELECT",
    "question": "Which of the following terms refers to a 32-bit CPU architecture?",
    "options": [
      {
        "text": "x32",
        "correct": false
      },
      {
        "text": "x48",
        "correct": false
      },
      {
        "text": "x64",
        "correct": false
      },
      {
        "text": "x86",
        "correct": true
      }
    ]
  },
  {
    "unitTitle": "3.5 - More Computer Parts",
    "type": "SELECT",
    "question": "Which of the terms listed below describes a CPU designed for 64-bit processing?",
    "options": [
      {
        "text": "x32",
        "correct": false
      },
      {
        "text": "x48",
        "correct": false
      },
      {
        "text": "x64",
        "correct": true
      },
      {
        "text": "x86",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "3.5 - More Computer Parts",
    "type": "SELECT",
    "question": "The presence of the Program Files (x86) folder on the C drive in MS Windows indicates that the system uses a 32-bit architecture and a 32-bit OS version.",
    "options": [
      {
        "text": "True",
        "correct": false
      },
      {
        "text": "False",
        "correct": true
      }
    ]
  },
  {
    "unitTitle": "3.5 - More Computer Parts",
    "type": "SELECT",
    "question": "A CPU design based on an instruction set that tries to improve speed by utilizing relatively few and simple instructions is called:",
    "options": [
      {
        "text": "RISC",
        "correct": true
      },
      {
        "text": "IA-64",
        "correct": false
      },
      {
        "text": "EPIC",
        "correct": false
      },
      {
        "text": "CISC",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "3.5 - More Computer Parts",
    "type": "SELECT",
    "question": "A type of CPU architecture where a single physical CPU contains more than one physical processing unit on a single integrated circuit is referred to as:",
    "options": [
      {
        "text": "Multiprocessor system architecture",
        "correct": false
      },
      {
        "text": "Multicore architecture",
        "correct": true
      },
      {
        "text": "Modular processor design architecture",
        "correct": false
      },
      {
        "text": "Multithreading architecture",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "3.5 - More Computer Parts",
    "type": "SELECT",
    "question": "The process of installing an expansion card should involve:",
    "options": [
      {
        "text": "Verifying hardware compatibility between the card and motherboard",
        "correct": false
      },
      {
        "text": "Following ESD protection procedures during installation",
        "correct": false
      },
      {
        "text": "Installing the latest drivers and software to ensure optimal functionality",
        "correct": false
      },
      {
        "text": "Accessing the BIOS/UEFI settings to disable conflicting onboard hardware if necessary",
        "correct": false
      },
      {
        "text": "Ensuring the system prioritizes the newly installed expansion card",
        "correct": false
      },
      {
        "text": "Performing all of the above",
        "correct": true
      }
    ]
  },
  {
    "unitTitle": "3.5 - More Computer Parts",
    "type": "SELECT",
    "question": "Which type of adapter card enables Ethernet connectivity?",
    "options": [
      {
        "text": "SIM",
        "correct": false
      },
      {
        "text": "Wi-Fi",
        "correct": false
      },
      {
        "text": "NIC",
        "correct": true
      },
      {
        "text": "WWAN",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "3.5 - More Computer Parts",
    "type": "SELECT",
    "question": "As opposed to active cooling components like cooling fans, heat sinks are considered passive cooling components because they do not require electrical power to operate.",
    "options": [
      {
        "text": "True",
        "correct": true
      },
      {
        "text": "False",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "3.5 - More Computer Parts",
    "type": "SELECT",
    "question": "In CPU cooling, thermal paste is applied to fill the narrow gap between the:",
    "options": [
      {
        "text": "CPU and heat sink",
        "correct": true
      },
      {
        "text": "Heat sink and thermal pad",
        "correct": false
      },
      {
        "text": "CPU and thermal pad",
        "correct": false
      },
      {
        "text": "Heat sink and CPU fan",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "3.6 - Computer Power",
    "type": "SELECT",
    "question": "Which of the answers listed below refers to the standard voltage range for most residential and commercial power outlets in the United States?",
    "options": [
      {
        "text": "110-120 VAC",
        "correct": true
      },
      {
        "text": "120-140 VAC",
        "correct": false
      },
      {
        "text": "210-220 VAC",
        "correct": false
      },
      {
        "text": "220-240 VAC",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "3.6 - Computer Power",
    "type": "SELECT",
    "question": "What is the standard voltage range used for power outlets in Europe?",
    "options": [
      {
        "text": "110-120 VAC",
        "correct": false
      },
      {
        "text": "120-140 VAC",
        "correct": false
      },
      {
        "text": "210-220 VAC",
        "correct": false
      },
      {
        "text": "220-240 VAC",
        "correct": true
      }
    ]
  },
  {
    "unitTitle": "3.6 - Computer Power",
    "type": "SELECT",
    "question": "A PSU's operation can be adjusted to the supplied voltage either by using a manual voltage selector on the back of the unit or automatically by the device. PSUs equipped with a manual voltage selector are referred to as fixed-input devices, while PSUs offering automatic voltage adjustment are known as auto-switching PSUs.",
    "options": [
      {
        "text": "True",
        "correct": true
      },
      {
        "text": "False",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "3.6 - Computer Power",
    "type": "SELECT",
    "question": "Which type of electric current is supplied to most of the internal PC components?",
    "options": [
      {
        "text": "AC",
        "correct": false
      },
      {
        "text": "HVDC",
        "correct": false
      },
      {
        "text": "DC",
        "correct": true
      },
      {
        "text": "PFC",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "3.6 - Computer Power",
    "type": "MULTI_SELECT",
    "question": "Which of the following PC components use circuits that operate at voltages up to 3.3V? (Select 2 answers)",
    "options": [
      {
        "text": "NVMe M.2 slots",
        "correct": true
      },
      {
        "text": "RAM slots",
        "correct": true
      },
      {
        "text": "Optical drives",
        "correct": false
      },
      {
        "text": "Case fans",
        "correct": false
      },
      {
        "text": "Graphics cards",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "3.6 - Computer Power",
    "type": "SELECT",
    "question": "Which of the PC components listed below operate on the 5V voltage rail?",
    "options": [
      {
        "text": "Graphics cards",
        "correct": false
      },
      {
        "text": "RAM slots",
        "correct": false
      },
      {
        "text": "CPUs",
        "correct": false
      },
      {
        "text": "USB ports and devices",
        "correct": true
      }
    ]
  },
  {
    "unitTitle": "3.6 - Computer Power",
    "type": "MULTI_SELECT",
    "question": "Which of the following PC components typically draw power from the 12V voltage rail provided by the power supply? (Select 3 answers)",
    "options": [
      {
        "text": "RAM slots",
        "correct": false
      },
      {
        "text": "Mechanical parts (e.g., case fans, motors, actuators)",
        "correct": true
      },
      {
        "text": "Graphics cards",
        "correct": true
      },
      {
        "text": "PCIe expansion cards",
        "correct": true
      },
      {
        "text": "Motherboard chipsets",
        "correct": false
      },
      {
        "text": "USB ports and devices",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "3.6 - Computer Power",
    "type": "SELECT",
    "question": "Modern ATX motherboards use a 24-pin power connector. Some power supplies feature a 20+4-pin connector to maintain compatibility with both 20-pin and 24-pin motherboards. The 20+4 connector can be used fully assembled for 24-pin motherboards or with the 4-pin section left unattached for 20-pin motherboards.",
    "options": [
      {
        "text": "True",
        "correct": true
      },
      {
        "text": "False",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "3.6 - Computer Power",
    "type": "SELECT",
    "question": "Which of the devices listed below would be required for a load-balancing setup where supplied power is split between multiple PSUs that automatically share the load and provide backup in case of a PSU failure?",
    "options": [
      {
        "text": "Standby UPS",
        "correct": false
      },
      {
        "text": "Redundant power supply",
        "correct": true
      },
      {
        "text": "Dual-power supply",
        "correct": false
      },
      {
        "text": "Managed PDU",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "3.6 - Computer Power",
    "type": "SELECT",
    "question": "In a modular power supply, the cables can be detached and reattached as needed, providing the flexibility to only use the cables required for the system, which helps reduce cable clutter and promotes better airflow within the computer case.",
    "options": [
      {
        "text": "True",
        "correct": true
      },
      {
        "text": "False",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "3.6 - Computer Power",
    "type": "SELECT",
    "question": "The power output rating of a PSU is measured in a unit known as:",
    "options": [
      {
        "text": "Volt",
        "correct": false
      },
      {
        "text": "Hertz",
        "correct": false
      },
      {
        "text": "Amp",
        "correct": false
      },
      {
        "text": "Watt",
        "correct": true
      }
    ]
  },
  {
    "unitTitle": "3.6 - Computer Power",
    "type": "SELECT",
    "question": "When selecting a PSU with energy efficiency in mind, the most important factor to consider is the 80 PLUS certification. This program rates PSUs based on their efficiency at various load levels, ensuring that they meet a minimum efficiency threshold. To maximize energy efficiency, reduce wasted energy, and lower long-term electricity costs, it is advisable to choose a PSU with a higher 80 PLUS rating, such as Gold, Platinum, or Titanium. These certifications indicate that the PSU operates more efficiently, reducing both energy loss and operational costs.",
    "options": [
      {
        "text": "True",
        "correct": true
      },
      {
        "text": "False",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "3.7 - Multifunction Devices",
    "type": "SELECT",
    "question": "Which of the following answers refers to software embedded within an MFD that provides basic instructions for its hardware to initialize and execute tasks?",
    "options": [
      {
        "text": "Device driver",
        "correct": false
      },
      {
        "text": "Middleware",
        "correct": false
      },
      {
        "text": "Print spooler",
        "correct": false
      },
      {
        "text": "Firmware",
        "correct": true
      }
    ]
  },
  {
    "unitTitle": "3.7 - Multifunction Devices",
    "type": "SELECT",
    "question": "Which of the options listed below would typically be used to set up a direct, wired connection between an MFD and a single computer host?",
    "options": [
      {
        "text": "PS/2",
        "correct": false
      },
      {
        "text": "RJ45",
        "correct": false
      },
      {
        "text": "USB",
        "correct": true
      },
      {
        "text": "PCIe",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "3.7 - Multifunction Devices",
    "type": "SELECT",
    "question": "Which connectivity option would be the most suitable in a scenario where multiple users on a wired network need access to MFD functions?",
    "options": [
      {
        "text": "Serial port",
        "correct": false
      },
      {
        "text": "Ethernet",
        "correct": true
      },
      {
        "text": "Parallel port",
        "correct": false
      },
      {
        "text": "KVM switch",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "3.7 - Multifunction Devices",
    "type": "SELECT",
    "question": "Which of the following answers refers to the most common wireless connectivity option for modern MFDs?",
    "options": [
      {
        "text": "4G/5G",
        "correct": false
      },
      {
        "text": "IR",
        "correct": false
      },
      {
        "text": "NFC",
        "correct": false
      },
      {
        "text": "802.11x",
        "correct": true
      },
      {
        "text": "RFID",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "3.7 - Multifunction Devices",
    "type": "SELECT",
    "question": "Which of the answers listed below does not describe a disadvantage related to a printer share?",
    "options": [
      {
        "text": "Each client computer needs to install the correct printer drivers for the shared printer",
        "correct": false
      },
      {
        "text": "Only available when the host computer is turned on and connected to the network",
        "correct": false
      },
      {
        "text": "Can become a bottleneck, especially with many users or large print jobs",
        "correct": false
      },
      {
        "text": "Typically involves a higher cost and setup complexity",
        "correct": true
      },
      {
        "text": "Offers limited control over user access, print quotas, and monitoring",
        "correct": false
      },
      {
        "text": "If the host computer crashes or has issues, the printer becomes unavailable to everyone",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "3.7 - Multifunction Devices",
    "type": "SELECT",
    "question": "Which of the following solutions would ensure the highest availability of the network printing service?",
    "options": [
      {
        "text": "Printer share",
        "correct": false
      },
      {
        "text": "Print server",
        "correct": true
      },
      {
        "text": "Local network share",
        "correct": false
      },
      {
        "text": "Public folder",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "3.7 - Multifunction Devices",
    "type": "SELECT",
    "question": "A printer's capability to print on both sides of a paper sheet is referred to as duplex printing.",
    "options": [
      {
        "text": "True",
        "correct": true
      },
      {
        "text": "False",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "3.7 - Multifunction Devices",
    "type": "SELECT",
    "question": "Common printer configuration options include paper orientation settings that allow switching between Portrait mode (vertical layout) and Landscape mode (horizontal layout). Some printers may include additional orientation options, allowing the printout to be rotated by a specific degree. For most printers, the default paper orientation is Portrait mode.",
    "options": [
      {
        "text": "True",
        "correct": true
      },
      {
        "text": "False",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "3.7 - Multifunction Devices",
    "type": "SELECT",
    "question": "Which printer setting allows configuration of a printout based on its paper size, type, or weight?",
    "options": [
      {
        "text": "Media type settings",
        "correct": false
      },
      {
        "text": "Print scaling settings",
        "correct": false
      },
      {
        "text": "Tray settings",
        "correct": true
      },
      {
        "text": "Paper orientation settings",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "3.7 - Multifunction Devices",
    "type": "SELECT",
    "question": "Which print quality setting typically offers the lowest resolution, fastest print speed, and most efficient toner or ink usage?",
    "options": [
      {
        "text": "Standard",
        "correct": false
      },
      {
        "text": "Default",
        "correct": false
      },
      {
        "text": "Automatic",
        "correct": false
      },
      {
        "text": "Draft",
        "correct": true
      }
    ]
  },
  {
    "unitTitle": "3.7 - Multifunction Devices",
    "type": "SELECT",
    "question": "Examples of security measures that can be implemented on a multifunction device or printer include:",
    "options": [
      {
        "text": "Login-based access via system software to ensure only authorized users can operate the device (user authentication)",
        "correct": false
      },
      {
        "text": "Integrated ID card readers requiring users to authenticate using company-issued badges (badging)",
        "correct": false
      },
      {
        "text": "Tracking of all printer activities, including user interactions, print jobs, and attempted access (audit logs)",
        "correct": false
      },
      {
        "text": "PIN printing, requiring users to enter a numeric passcode before releasing print jobs (secured prints)",
        "correct": false
      },
      {
        "text": "All of the above",
        "correct": true
      }
    ]
  },
  {
    "unitTitle": "3.7 - Multifunction Devices",
    "type": "SELECT",
    "question": "Which option allows an MFD to send a scanned document via an SMTP server?",
    "options": [
      {
        "text": "Email",
        "correct": true
      },
      {
        "text": "SMB",
        "correct": false
      },
      {
        "text": "Print from cloud",
        "correct": false
      },
      {
        "text": "Fax",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "3.7 - Multifunction Devices",
    "type": "SELECT",
    "question": "Which network scan service enables scanned documents to be saved directly to shared folders on a local network?",
    "options": [
      {
        "text": "FTP",
        "correct": false
      },
      {
        "text": "Local copy function",
        "correct": false
      },
      {
        "text": "LDAP",
        "correct": false
      },
      {
        "text": "SMB",
        "correct": true
      }
    ]
  },
  {
    "unitTitle": "3.7 - Multifunction Devices",
    "type": "SELECT",
    "question": "A user wants to scan a document from a multifunction printer and access it remotely from a personal online storage account. Which feature should be configured?",
    "options": [
      {
        "text": "Web print service",
        "correct": false
      },
      {
        "text": "Scan to network folder",
        "correct": false
      },
      {
        "text": "Network file share",
        "correct": false
      },
      {
        "text": "Cloud service",
        "correct": true
      }
    ]
  },
  {
    "unitTitle": "3.7 - Multifunction Devices",
    "type": "SELECT",
    "question": "Which MFD/MFP component optimizes processing of multi-page documents?",
    "options": [
      {
        "text": "Feed assembly",
        "correct": false
      },
      {
        "text": "ADF",
        "correct": true
      },
      {
        "text": "Transfer roller",
        "correct": false
      },
      {
        "text": "System tray",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "3.7 - Multifunction Devices",
    "type": "SELECT",
    "question": "A flatbed scanner is a device that uses a flat glass surface on which documents, photos, or other materials are placed face down while a scanning mechanism moves underneath to capture the image.",
    "options": [
      {
        "text": "True",
        "correct": true
      },
      {
        "text": "False",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "3.8 - Printers Part 1",
    "type": "SELECT",
    "question": "A prepackaged set of laser printer spare parts, typically including components with a limited lifespan that must be replaced to maintain consistent performance and prevent failures, is commonly referred to as:",
    "options": [
      {
        "text": "Hardware replacement bundle",
        "correct": false
      },
      {
        "text": "Printer service set",
        "correct": false
      },
      {
        "text": "Maintenance kit",
        "correct": true
      },
      {
        "text": "Service component pack",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "3.8 - Printers Part 1",
    "type": "SELECT",
    "question": "Before installing a new toner cartridge, it is recommended to gently rock it back and forth several times in a horizontal motion. This step facilitates the uniform distribution of toner powder within the cartridge, which in turn contributes to a consistent print density throughout the lifespan of the cartridge.",
    "options": [
      {
        "text": "True",
        "correct": true
      },
      {
        "text": "False",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "3.8 - Printers Part 1",
    "type": "SELECT",
    "question": "Which of the terms listed below refers to the process of adjusting a printer so that its output aligns accurately with the intended image or text and matches the expected color and print quality?",
    "options": [
      {
        "text": "Fine-tuning",
        "correct": false
      },
      {
        "text": "Validation",
        "correct": false
      },
      {
        "text": "Standardization",
        "correct": false
      },
      {
        "text": "Calibration",
        "correct": true
      }
    ]
  },
  {
    "unitTitle": "3.8 - Printers Part 1",
    "type": "MULTI_SELECT",
    "question": "Which of the following tools would be the most appropriate for cleaning the inside of a laser printer? (Select 3 answers)",
    "options": [
      {
        "text": "Toner vacuum",
        "correct": true
      },
      {
        "text": "General household cleaners",
        "correct": false
      },
      {
        "text": "Can of compressed air",
        "correct": false
      },
      {
        "text": "Paper towels",
        "correct": false
      },
      {
        "text": "Regular vacuum",
        "correct": false
      },
      {
        "text": "Toner cleaning wipes",
        "correct": true
      },
      {
        "text": "Isopropyl alcohol",
        "correct": true
      }
    ]
  },
  {
    "unitTitle": "3.8 - Printers Part 1",
    "type": "SELECT",
    "question": "In an inkjet printer, the replaceable component used in the process of applying color to the page is called:",
    "options": [
      {
        "text": "Thermal printhead",
        "correct": false
      },
      {
        "text": "Ink cartridge",
        "correct": true
      },
      {
        "text": "Drum unit",
        "correct": false
      },
      {
        "text": "Transfer ribbon",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "3.8 - Printers Part 1",
    "type": "SELECT",
    "question": "Which of the answers listed below refers to an inkjet printer component that sprays microscopic droplets of ink through nozzles to form text or images on paper?",
    "options": [
      {
        "text": "Imaging drum",
        "correct": false
      },
      {
        "text": "Corona wire",
        "correct": false
      },
      {
        "text": "Printhead",
        "correct": true
      },
      {
        "text": "Fuser assembly",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "3.8 - Printers Part 1",
    "type": "SELECT",
    "question": "A rubberized cylindrical component that grips and moves paper through the printing process in an inkjet printer is referred to as:",
    "options": [
      {
        "text": "Carriage",
        "correct": false
      },
      {
        "text": "Roller",
        "correct": true
      },
      {
        "text": "Feeder",
        "correct": false
      },
      {
        "text": "Input tray",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "3.8 - Printers Part 1",
    "type": "SELECT",
    "question": "Which component of an inkjet printer is responsible for picking up individual sheets of paper from the input tray and feeding them into the print path?",
    "options": [
      {
        "text": "Output tray",
        "correct": false
      },
      {
        "text": "Feeder",
        "correct": true
      },
      {
        "text": "Carriage",
        "correct": false
      },
      {
        "text": "Transfer belt",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "3.8 - Printers Part 1",
    "type": "SELECT",
    "question": "Most modern inkjet printers are designed to allow cartridge replacement while powered on, ensuring proper detection and alignment of new cartridges. While turning off the printer may be recommended for certain models, it is not universally required for ink cartridge replacement.",
    "options": [
      {
        "text": "True",
        "correct": true
      },
      {
        "text": "False",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "3.8 - Printers Part 1",
    "type": "SELECT",
    "question": "What is the primary goal of inkjet calibration?",
    "options": [
      {
        "text": "To reduce ink consumption per page",
        "correct": false
      },
      {
        "text": "To correct color printing errors and misalignments",
        "correct": true
      },
      {
        "text": "To increase the speed of printing",
        "correct": false
      },
      {
        "text": "To ensure compatibility with third-party ink cartridges",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "3.8 - Printers Part 1",
    "type": "SELECT",
    "question": "What should be checked for if an inkjet printer experiences frequent paper jams?",
    "options": [
      {
        "text": "Obstruction in the paper path caused by foreign objects",
        "correct": false
      },
      {
        "text": "Incorrect paper type or size",
        "correct": false
      },
      {
        "text": "Paper tray overloading",
        "correct": false
      },
      {
        "text": "Dirty, worn, or damaged paper feed rollers",
        "correct": false
      },
      {
        "text": "All of the above",
        "correct": true
      }
    ]
  },
  {
    "unitTitle": "3.8 - Printers Part 2",
    "type": "SELECT",
    "question": "Which of the answers listed below refers to a thermal printer's component responsible for moving paper through the printer during the printing process?",
    "options": [
      {
        "text": "Transfer belt",
        "correct": false
      },
      {
        "text": "Paper guide",
        "correct": false
      },
      {
        "text": "Feed assembly",
        "correct": true
      },
      {
        "text": "Platen roller",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "3.8 - Printers Part 2",
    "type": "SELECT",
    "question": "Thermal printers use a special type of paper coated with a heat-sensitive layer that responds to the heat of the printhead. When heated, this layer darkens, enabling the printer to produce text or images without using ink or toner.",
    "options": [
      {
        "text": "True",
        "correct": true
      },
      {
        "text": "False",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "3.8 - Printers Part 2",
    "type": "SELECT",
    "question": "Maintaining a thermal printer involves several key practices to ensure optimal performance and longevity. To prevent premature fading and maintain print quality, it is recommended to store thermal paper in a cool, dry place away from direct sunlight and heat sources. The heating element, responsible for creating the image, should be periodically cleaned using a lint-free cloth or a specialized cleaning card lightly dampened with isopropyl alcohol to remove any residue buildup. Furthermore, it is important to regularly remove dust and debris from the rollers and paper feed areas by using compressed air or a soft brush to prevent paper jams and ensure smooth operation.",
    "options": [
      {
        "text": "True",
        "correct": true
      },
      {
        "text": "False",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "3.8 - Printers Part 2",
    "type": "SELECT",
    "question": "Which printer type uses an inked ribbon to create text or images on paper?",
    "options": [
      {
        "text": "Inkjet",
        "correct": false
      },
      {
        "text": "Thermal",
        "correct": false
      },
      {
        "text": "Impact",
        "correct": true
      },
      {
        "text": "Laser",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "3.8 - Printers Part 2",
    "type": "SELECT",
    "question": "Which type of printing paper is designed to create duplicate copies during the printing process?",
    "options": [
      {
        "text": "Thermal",
        "correct": false
      },
      {
        "text": "Duplex",
        "correct": false
      },
      {
        "text": "Multipart",
        "correct": true
      },
      {
        "text": "None of the above",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "3.8 - Printers Part 2",
    "type": "MULTI_SELECT",
    "question": "Which of the signs listed below may indicate that a printer ribbon needs replacement? (Select 2 answers)",
    "options": [
      {
        "text": "Faded or light print output",
        "correct": true
      },
      {
        "text": "Repetitive smudging of characters",
        "correct": false
      },
      {
        "text": "Frequent paper jams",
        "correct": false
      },
      {
        "text": "Characters appearing incomplete",
        "correct": true
      },
      {
        "text": "Paper feeding too slowly",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "4.1 - Virtualization",
    "type": "MULTI_SELECT",
    "question": "What are the primary benefits of using a sandboxed environment in virtualization? (Select 2 answers)",
    "options": [
      {
        "text": "Enabling cross-platform application development",
        "correct": false
      },
      {
        "text": "Sharing resources between multiple virtual machines",
        "correct": false
      },
      {
        "text": "Isolating untrusted software or code to prevent damage to the host system",
        "correct": true
      },
      {
        "text": "Analyzing malware in a controlled environment",
        "correct": true
      },
      {
        "text": "Running multiple operating systems on a single physical machine",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "4.1 - Virtualization",
    "type": "SELECT",
    "question": "A software developer needs to test a new application feature that might introduce instability. Using virtualization, what is the most appropriate way to isolate this task?",
    "options": [
      {
        "text": "Create a virtual machine as a sandbox specifically for testing this feature",
        "correct": true
      },
      {
        "text": "Use a dual-boot system to test the feature on a separate partition",
        "correct": false
      },
      {
        "text": "Host the application on a networked virtual machine shared by multiple users",
        "correct": false
      },
      {
        "text": "Create a snapshot of the production environment and test the feature within it",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "4.1 - Virtualization",
    "type": "SELECT",
    "question": "What is the primary purpose of application virtualization?",
    "options": [
      {
        "text": "To emulate computer hardware for running different operating systems",
        "correct": false
      },
      {
        "text": "To remove all hardware limitations from software execution",
        "correct": false
      },
      {
        "text": "To permanently reduce software licensing costs",
        "correct": false
      },
      {
        "text": "To run software without installing it directly on the host operating system",
        "correct": true
      }
    ]
  },
  {
    "unitTitle": "4.1 - Virtualization",
    "type": "SELECT",
    "question": "A company needs to run accounting software designed for Windows XP on a Windows 11 host. What would be the most practical modern solution?",
    "options": [
      {
        "text": "Enable compatibility mode for Windows XP within Windows 11",
        "correct": false
      },
      {
        "text": "Replace the legacy app with a modern accounting software package",
        "correct": false
      },
      {
        "text": "Run Windows XP in a dual-boot configuration alongside Windows 11",
        "correct": false
      },
      {
        "text": "Install Windows XP in a virtual machine on the current system",
        "correct": true
      }
    ]
  },
  {
    "unitTitle": "4.1 - Virtualization",
    "type": "SELECT",
    "question": "What is the primary advantage of using cross-platform virtualization?",
    "options": [
      {
        "text": "Running multiple operating systems simultaneously",
        "correct": false
      },
      {
        "text": "Enabling software to run on an unsupported operating system",
        "correct": true
      },
      {
        "text": "Allowing virtual machines to run without a host OS",
        "correct": false
      },
      {
        "text": "Providing direct hardware access for legacy applications",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "4.1 - Virtualization",
    "type": "SELECT",
    "question": "What security practice helps to limit the potential impact of a compromised virtual machine on other VMs and the host?",
    "options": [
      {
        "text": "Using multi-factor authentication for hypervisor access",
        "correct": false
      },
      {
        "text": "Ensuring proper isolation between virtual machines",
        "correct": true
      },
      {
        "text": "Conducting regular vulnerability scans of the virtual machines",
        "correct": false
      },
      {
        "text": "Implementing intrusion detection systems on the network",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "4.1 - Virtualization",
    "type": "SELECT",
    "question": "What is a common method for managing access and permissions within a virtualized infrastructure?",
    "options": [
      {
        "text": "Deploying a host-based firewall on each virtual machine",
        "correct": false
      },
      {
        "text": "Installing antivirus software on all virtual machines",
        "correct": false
      },
      {
        "text": "Utilizing the access control features of the hypervisor",
        "correct": true
      },
      {
        "text": "Encrypting data in transit between virtual machines",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "4.1 - Virtualization",
    "type": "SELECT",
    "question": "Enforcing strong password protection on the hypervisor management interface is less critical than applying the same level of password security to individual virtual machines.",
    "options": [
      {
        "text": "True",
        "correct": false
      },
      {
        "text": "False",
        "correct": true
      }
    ]
  },
  {
    "unitTitle": "4.1 - Virtualization",
    "type": "SELECT",
    "question": "Keeping the hypervisor software up to date primarily helps to protect against:",
    "options": [
      {
        "text": "Accidental data loss within virtual machines",
        "correct": false
      },
      {
        "text": "Performance bottlenecks within virtual machines",
        "correct": false
      },
      {
        "text": "Known security vulnerabilities",
        "correct": true
      },
      {
        "text": "Unauthorized access to guest operating systems",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "4.1 - Virtualization",
    "type": "SELECT",
    "question": "What is the key benefit of using SSDs in virtualized environments?",
    "options": [
      {
        "text": "Compact form factor",
        "correct": false
      },
      {
        "text": "Fast read/write speeds",
        "correct": true
      },
      {
        "text": "High capacity",
        "correct": false
      },
      {
        "text": "Low cost per terabyte of storage",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "4.1 - Virtualization",
    "type": "SELECT",
    "question": "Which of the answers listed below refers to a virtualization platform used to deliver virtual desktops to multiple users?",
    "options": [
      {
        "text": "VDE",
        "correct": false
      },
      {
        "text": "VNC",
        "correct": false
      },
      {
        "text": "VDI",
        "correct": true
      },
      {
        "text": "RDP",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "4.1 - Virtualization",
    "type": "SELECT",
    "question": "What is a container in virtualization?",
    "options": [
      {
        "text": "A dedicated partition used to store virtual machines",
        "correct": false
      },
      {
        "text": "A virtualized environment that runs operating systems and applications",
        "correct": false
      },
      {
        "text": "A security feature that prevents unauthorized users from accessing virtual machines",
        "correct": false
      },
      {
        "text": "A portable package containing an app and everything it needs to run",
        "correct": true
      }
    ]
  },
  {
    "unitTitle": "4.1 - Virtualization",
    "type": "SELECT",
    "question": "Which of the following answers best describes a Type 1 hypervisor?",
    "options": [
      {
        "text": "A hypervisor that requires an OS to run virtual machines",
        "correct": false
      },
      {
        "text": "A hypervisor that runs as an application on a host OS",
        "correct": false
      },
      {
        "text": "A hypervisor type commonly used in personal desktop environments",
        "correct": false
      },
      {
        "text": "A hypervisor that runs directly on the hardware",
        "correct": true
      }
    ]
  },
  {
    "unitTitle": "4.1 - Virtualization",
    "type": "SELECT",
    "question": "What potential performance limitation might a Type 2 hypervisor experience compared to a Type 1 hypervisor?",
    "options": [
      {
        "text": "Inability to run multiple virtual machines",
        "correct": false
      },
      {
        "text": "Restriction on the amount of RAM allocated to VMs",
        "correct": false
      },
      {
        "text": "Overhead from the host operating system consuming resources",
        "correct": true
      },
      {
        "text": "Lack of support for certain types of hardware",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "4.2 - Cloud",
    "type": "SELECT",
    "question": "Which of the answers listed below best describes a private cloud?",
    "options": [
      {
        "text": "A cloud infrastructure that is exclusively used by a single organization",
        "correct": true
      },
      {
        "text": "A cloud environment where several organizations collaborate and share resources",
        "correct": false
      },
      {
        "text": "A cloud computing model that blends internal resources with public services",
        "correct": false
      },
      {
        "text": "A cloud platform that offers on-demand access for various organizations",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "4.2 - Cloud",
    "type": "SELECT",
    "question": "What type of entities would typically use a private cloud?",
    "options": [
      {
        "text": "Small businesses looking to reduce costs",
        "correct": false
      },
      {
        "text": "Public service providers",
        "correct": false
      },
      {
        "text": "Organizations with strict compliance and security requirements",
        "correct": true
      },
      {
        "text": "Anyone seeking to make use of cloud storage",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "4.2 - Cloud",
    "type": "SELECT",
    "question": "Which of the following answers refers to a cloud deployment model where computing resources (such as servers, storage, and applications) are owned and operated by a third-party cloud service provider and shared across multiple organizations or tenants?",
    "options": [
      {
        "text": "Hybrid cloud",
        "correct": false
      },
      {
        "text": "Private cloud",
        "correct": false
      },
      {
        "text": "Community cloud",
        "correct": false
      },
      {
        "text": "Public cloud",
        "correct": true
      }
    ]
  },
  {
    "unitTitle": "4.2 - Cloud",
    "type": "SELECT",
    "question": "Which of the answers listed below best defines a hybrid cloud?",
    "options": [
      {
        "text": "A model that offers on-demand access to shared public resources",
        "correct": false
      },
      {
        "text": "A model that pools resources exclusively among organizations with shared interests",
        "correct": false
      },
      {
        "text": "A model that integrates both private and public cloud resources",
        "correct": true
      },
      {
        "text": "A model that dedicates the entire infrastructure to one organization",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "4.2 - Cloud",
    "type": "SELECT",
    "question": "What is the primary advantage of a hybrid cloud?",
    "options": [
      {
        "text": "Allows for shared infrastructure between organizations",
        "correct": false
      },
      {
        "text": "Combines the benefits of private and public cloud deployment models",
        "correct": true
      },
      {
        "text": "Offers dedicated infrastructure for a single organization",
        "correct": false
      },
      {
        "text": "Provides enhanced control over security and privacy",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "4.2 - Cloud",
    "type": "SELECT",
    "question": "A type of cloud infrastructure shared by several organizations with similar security, compliance, or industry requirements is known as:",
    "options": [
      {
        "text": "Federated cloud",
        "correct": false
      },
      {
        "text": "Distributed cloud",
        "correct": false
      },
      {
        "text": "Shared cloud",
        "correct": false
      },
      {
        "text": "Community cloud",
        "correct": true
      }
    ]
  },
  {
    "unitTitle": "4.2 - Cloud",
    "type": "MULTI_SELECT",
    "question": "Which of the following answers refer to example implementations of the community cloud deployment model? (Select 3 answers)",
    "options": [
      {
        "text": "A federated cloud infrastructure connecting multiple independent providers",
        "correct": false
      },
      {
        "text": "A cloud environment developed for universities conducting joint research projects",
        "correct": true
      },
      {
        "text": "A shared cloud used by several government agencies",
        "correct": true
      },
      {
        "text": "A cloud-based solution for public safety organizations with similar data handling policies",
        "correct": true
      },
      {
        "text": "A multinational cloud infrastructure using separate private clouds in each region",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "4.2 - Cloud",
    "type": "SELECT",
    "question": "Which of the answers listed below refers to a cloud computing service model where clients, instead of buying hardware and software, access computing infrastructure as an outsourced service from suppliers who own and maintain all the necessary equipment and software?",
    "options": [
      {
        "text": "SaaS",
        "correct": false
      },
      {
        "text": "DaaS",
        "correct": false
      },
      {
        "text": "PaaS",
        "correct": false
      },
      {
        "text": "IaaS",
        "correct": true
      }
    ]
  },
  {
    "unitTitle": "4.2 - Cloud",
    "type": "SELECT",
    "question": "A cloud computing service model that provides users with remote access to applications over the Internet on a subscription basis is called:",
    "options": [
      {
        "text": "PaaS",
        "correct": false
      },
      {
        "text": "SaaS",
        "correct": true
      },
      {
        "text": "IaaS",
        "correct": false
      },
      {
        "text": "DaaS",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "4.2 - Cloud",
    "type": "SELECT",
    "question": "Which cloud computing service model would provide the best solution for a web developer intending to create a web app?",
    "options": [
      {
        "text": "DaaS",
        "correct": false
      },
      {
        "text": "SaaS",
        "correct": false
      },
      {
        "text": "PaaS",
        "correct": true
      },
      {
        "text": "IaaS",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "4.2 - Cloud",
    "type": "SELECT",
    "question": "Which cloud deployment model primarily relies on the concept of shared resources?",
    "options": [
      {
        "text": "Private cloud",
        "correct": false
      },
      {
        "text": "Hybrid cloud",
        "correct": false
      },
      {
        "text": "Dedicated cloud",
        "correct": false
      },
      {
        "text": "Public cloud",
        "correct": true
      }
    ]
  },
  {
    "unitTitle": "4.2 - Cloud",
    "type": "SELECT",
    "question": "Which of the following is a key benefit of utilizing shared resources in cloud computing?",
    "options": [
      {
        "text": "Enhanced security through isolation",
        "correct": false
      },
      {
        "text": "Full control over the physical infrastructure",
        "correct": false
      },
      {
        "text": "Lower costs due to economies of scale",
        "correct": true
      },
      {
        "text": "Predictable and consistent performance",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "4.2 - Cloud",
    "type": "SELECT",
    "question": "What is a potential drawback of using shared resources in a cloud environment?",
    "options": [
      {
        "text": "Possible performance degradation during high demand periods",
        "correct": true
      },
      {
        "text": "Difficulty in managing multiple cloud instances simultaneously",
        "correct": false
      },
      {
        "text": "Inability to scale resources up or down based on demand",
        "correct": false
      },
      {
        "text": "More complex management of the underlying infrastructure for the user",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "4.2 - Cloud",
    "type": "SELECT",
    "question": "Which cloud deployment model most commonly relies on dedicated resources?",
    "options": [
      {
        "text": "Public cloud",
        "correct": false
      },
      {
        "text": "Community cloud",
        "correct": false
      },
      {
        "text": "Hybrid cloud",
        "correct": false
      },
      {
        "text": "Private cloud",
        "correct": true
      }
    ]
  },
  {
    "unitTitle": "4.2 - Cloud",
    "type": "SELECT",
    "question": "In cloud computing, metered utilization refers to a billing model where customers are charged based on actual resource consumption.",
    "options": [
      {
        "text": "True",
        "correct": true
      },
      {
        "text": "False",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "4.2 - Cloud",
    "type": "SELECT",
    "question": "In the context of metered utilization, what does the term egress refer to?",
    "options": [
      {
        "text": "Data download speed",
        "correct": false
      },
      {
        "text": "Data upload speed",
        "correct": false
      },
      {
        "text": "Data leaving cloud",
        "correct": true
      },
      {
        "text": "Data entering cloud",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "4.2 - Cloud",
    "type": "SELECT",
    "question": "Under a metered utilization model, ingress is defined as:",
    "options": [
      {
        "text": "Data transfer speed into the cloud",
        "correct": false
      },
      {
        "text": "Data entering the cloud environment",
        "correct": true
      },
      {
        "text": "Data transfer speed from the cloud",
        "correct": false
      },
      {
        "text": "Data leaving the cloud environment",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "4.2 - Cloud",
    "type": "SELECT",
    "question": "Elasticity in cloud computing ensures that resource allocation adjusts automatically based on demand, increasing resources when usage spikes and scaling down during periods of low demand. By automatically adjusting to actual demand, elasticity minimizes the risk of having too many idle resources (over-provisioning) or too few resources during peak times (under-provisioning), leading to efficient resource management.",
    "options": [
      {
        "text": "True",
        "correct": true
      },
      {
        "text": "False",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "4.2 - Cloud",
    "type": "SELECT",
    "question": "What is the goal of availability in cloud computing?",
    "options": [
      {
        "text": "Synchronizing data across multiple user devices in real time",
        "correct": false
      },
      {
        "text": "Allowing multiple users to share the same resources",
        "correct": false
      },
      {
        "text": "Dynamically scaling resources based on demand",
        "correct": false
      },
      {
        "text": "Ensuring services are accessible with minimal interruption",
        "correct": true
      }
    ]
  },
  {
    "unitTitle": "4.2 - Cloud",
    "type": "SELECT",
    "question": "Which metric is most commonly used to represent the availability of a cloud service?",
    "options": [
      {
        "text": "Outage duration",
        "correct": false
      },
      {
        "text": "Error rate percentage",
        "correct": false
      },
      {
        "text": "Network packet loss rate",
        "correct": false
      },
      {
        "text": "Uptime percentage",
        "correct": true
      }
    ]
  },
  {
    "unitTitle": "4.2 - Cloud",
    "type": "SELECT",
    "question": "Which term refers to the formal agreement specifying availability guarantees between a cloud service provider and a customer?",
    "options": [
      {
        "text": "BPA",
        "correct": false
      },
      {
        "text": "EULA",
        "correct": false
      },
      {
        "text": "SLA",
        "correct": true
      },
      {
        "text": "MSA",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "4.2 - Cloud",
    "type": "SELECT",
    "question": "Which of the answers listed below best describes file synchronization in a cloud environment?",
    "options": [
      {
        "text": "Maintaining a version history for documents stored online",
        "correct": false
      },
      {
        "text": "Reflecting file edits made on one device across all other connected devices",
        "correct": true
      },
      {
        "text": "Allowing multiple users to simultaneously edit different sections of a shared online document",
        "correct": false
      },
      {
        "text": "Transferring file documents between different cloud service providers",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "4.2 - Cloud",
    "type": "SELECT",
    "question": "Which cloud computing feature enables several customers to share a single software deployment without accessing each other's data?",
    "options": [
      {
        "text": "Multitenancy",
        "correct": true
      },
      {
        "text": "Elasticity",
        "correct": false
      },
      {
        "text": "Dynamic provisioning",
        "correct": false
      },
      {
        "text": "Load balancing",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "5.1 - Troubleshooting Hardware",
    "type": "SELECT",
    "question": "A Power-On Self-Test (POST) is a diagnostic sequence run by a computer’s BIOS or UEFI when the system is powered on. It checks whether essential hardware components are functioning correctly before attempting to load the operating system. If an issue is detected during POST, the BIOS typically reports the error through a series of audible beeps. Since beep code meanings are highly specific to each BIOS manufacturer, there is no universal standard across vendors. Troubleshooting POST beeps begins by identifying the motherboard's BIOS manufacturer. This information is usually displayed briefly on the screen during the initial startup phase (it can also be found in the motherboard manual or by looking up the motherboard model online). Once the appropriate beep code chart is located, the pattern of beeps (such as the number, duration, and spacing) can help identify the faulty component for targeted troubleshooting.",
    "options": [
      {
        "text": "True",
        "correct": true
      },
      {
        "text": "False",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "5.1 - Troubleshooting Hardware",
    "type": "SELECT",
    "question": "The Blue Screen of Death (BSoD), also known as a stop error screen, appears in Microsoft Windows when the system encounters a critical error it cannot recover from without risking further instability. The BSoD typically displays technical details that may help advanced users diagnose the underlying cause of the error. In earlier versions of Windows, the BSoD included elements such as an error code, the memory address where the fault occurred, and the name of the driver that caused it. Beginning with Windows 8, the screen was redesigned to present a simplified message, along with a stop code, a URL, and a QR code linking to online troubleshooting resources. For Windows to recover from a BSoD, a system restart is required. This may occur automatically or be triggered manually using the Ctrl + Alt + Delete key combination or by pressing the computer’s power button.",
    "options": [
      {
        "text": "True",
        "correct": true
      },
      {
        "text": "False",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "5.1 - Troubleshooting Hardware",
    "type": "SELECT",
    "question": "When a blank screen appears after system startup, the initial troubleshooting steps include verifying that the system is receiving power (as indicated by fans, LEDs, or other activity) and ensuring that the monitor is turned on, properly connected, and set to the correct input. The absence of any display output may indicate issues with critical components such as the motherboard, RAM, CPU, or GPU, which can prevent the system from passing POST. If no issues are identified with the power or connections, reseating the RAM, GPU, and confirming proper CPU installation, as well as clearing the CMOS to reset BIOS settings, can help resolve configuration issues that might cause a blank screen. Additionally, checking and replacing cables, or testing the monitor on another system, when available, further isolates the root cause of the problem.",
    "options": [
      {
        "text": "True",
        "correct": true
      },
      {
        "text": "False",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "5.1 - Troubleshooting Hardware",
    "type": "SELECT",
    "question": "Which of these external checks would be useful when troubleshooting a PC that shows no signs of receiving power?",
    "options": [
      {
        "text": "Ensure that the power cord is securely connected to both the wall outlet and the PSU",
        "correct": false
      },
      {
        "text": "Confirm that the outlet is delivering power by testing it with another device or using a circuit tester",
        "correct": false
      },
      {
        "text": "Examine the power cord for physical damage or fraying",
        "correct": false
      },
      {
        "text": "Verify that any surge protector or power strip is turned on and functioning properly",
        "correct": false
      },
      {
        "text": "Plug the system directly into the wall outlet to eliminate the surge protector as a factor",
        "correct": false
      },
      {
        "text": "All of the above",
        "correct": true
      }
    ]
  },
  {
    "unitTitle": "5.1 - Troubleshooting Hardware",
    "type": "SELECT",
    "question": "Which of the following actions might be of help when troubleshooting a PSU that fails to power on?",
    "options": [
      {
        "text": "Confirming that the PSU’s power switch (usually located on the back of the unit) is turned on",
        "correct": false
      },
      {
        "text": "Inspecting the PSU for any signs of physical damage, burning smells, or unusual noises",
        "correct": false
      },
      {
        "text": "Performing a paperclip test (ATX jumper test) to verify PSU fan activation",
        "correct": false
      },
      {
        "text": "Testing the PSU with a PSU tester or replacing it temporarily with a known-good unit",
        "correct": false
      },
      {
        "text": "All of the above",
        "correct": true
      }
    ]
  },
  {
    "unitTitle": "5.1 - Troubleshooting Hardware",
    "type": "SELECT",
    "question": "Which internal power delivery checks would be useful when troubleshooting a PC that is not powering on?",
    "options": [
      {
        "text": "Performing a visual inspection of internal components for signs of damage, such as burnt components or leaking capacitors",
        "correct": false
      },
      {
        "text": "Ensuring that the motherboard is installed correctly with no grounding issues (e.g., misplaced standoffs)",
        "correct": false
      },
      {
        "text": "Confirming that the CPU is properly aligned, securely locked, free from damage and debris, and in optimal contact with the cooling solution",
        "correct": false
      },
      {
        "text": "Ensuring that all internal power connectors (main ATX, CPU, GPU, and any additional connectors) are firmly seated on the motherboard",
        "correct": false
      },
      {
        "text": "Verifying that the power button cable from the case is correctly connected to the appropriate motherboard header",
        "correct": false
      },
      {
        "text": "Trying a minimal boot configuration (CPU, GPU, and a single RAM module) to determine if any additional component is causing a conflict that prevents power from being delivered or recognized",
        "correct": false
      },
      {
        "text": "All of the above",
        "correct": true
      }
    ]
  },
  {
    "unitTitle": "5.1 - Troubleshooting Hardware",
    "type": "SELECT",
    "question": "Which motherboard-related issue can result in degraded performance without triggering errors or shutdowns?",
    "options": [
      {
        "text": "Corrupted BIOS/UEFI firmware",
        "correct": false
      },
      {
        "text": "Swollen/leaking capacitors",
        "correct": true
      },
      {
        "text": "Improperly seated CPU",
        "correct": false
      },
      {
        "text": "Disconnected ATX power cable",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "5.1 - Troubleshooting Hardware",
    "type": "SELECT",
    "question": "During heavy multitasking in a workstation, a technician notices that the disk activity light remains almost constantly lit, even without any large file transfers. Applications load very slowly, and the overall system response is noticeably degraded. A performance monitoring tool confirms an unusually high level of paging, where data is frequently swapped to the disk. What is the most likely cause of this behavior?",
    "options": [
      {
        "text": "Overheating of the CPU",
        "correct": false
      },
      {
        "text": "Background antivirus scan",
        "correct": false
      },
      {
        "text": "Faulty disk controller",
        "correct": false
      },
      {
        "text": "Insufficient amount of RAM",
        "correct": true
      }
    ]
  },
  {
    "unitTitle": "5.1 - Troubleshooting Hardware",
    "type": "SELECT",
    "question": "A CPU is operating well below its advertised speed, resulting in slow system response. The BIOS displays the correct CPU model but reports a lower frequency than expected. Which setting could cause this behavior?",
    "options": [
      {
        "text": "Incorrect fan speed control settings",
        "correct": false
      },
      {
        "text": "Enabled power-saving mode",
        "correct": true
      },
      {
        "text": "Disabled CPU temperature monitoring",
        "correct": false
      },
      {
        "text": "Enabled CPU thermal throttling protection",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "5.1 - Troubleshooting Hardware",
    "type": "SELECT",
    "question": "After upgrading a gaming PC with a high-performance GPU, the user notices sluggish in-game performance, system instability, unexpected shutdowns, and random reboots under heavy load. What is the most likely cause?",
    "options": [
      {
        "text": "Overheating CPU",
        "correct": false
      },
      {
        "text": "Faulty GPU",
        "correct": false
      },
      {
        "text": "Overloaded PSU",
        "correct": true
      },
      {
        "text": "Insufficient RAM",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "5.1 - Troubleshooting Hardware",
    "type": "SELECT",
    "question": "In Microsoft Windows operating systems, the Performance tab in Windows Task Manager allows users to identify hardware components affecting system performance. In a similar fashion, Task Manager's Processes tab can be used to identify compute-intensive applications and processes that may be the cause of sluggish system performance.",
    "options": [
      {
        "text": "True",
        "correct": true
      },
      {
        "text": "False",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "5.1 - Troubleshooting Hardware",
    "type": "SELECT",
    "question": "Excessive dust buildup inside the computer case might be the cause of overheating, which in turn may lead to:",
    "options": [
      {
        "text": "Sluggish performance",
        "correct": false
      },
      {
        "text": "Frequent system crashes",
        "correct": false
      },
      {
        "text": "Unexpected shutdowns",
        "correct": false
      },
      {
        "text": "Irreversible hardware damage",
        "correct": false
      },
      {
        "text": "All of the above",
        "correct": true
      }
    ]
  },
  {
    "unitTitle": "5.1 - Troubleshooting Hardware",
    "type": "SELECT",
    "question": "Which of the symptoms listed below is most likely a direct result of overheating?",
    "options": [
      {
        "text": "Reduced cooling efficiency",
        "correct": false
      },
      {
        "text": "Application crashes",
        "correct": false
      },
      {
        "text": "Random system shutdowns",
        "correct": true
      },
      {
        "text": "Blank screen during boot",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "5.1 - Troubleshooting Hardware",
    "type": "SELECT",
    "question": "What is thermal throttling in relation to CPU overheating?",
    "options": [
      {
        "text": "The CPU increasing fan speed to cool down",
        "correct": false
      },
      {
        "text": "The CPU reducing its operating speed to avoid damage",
        "correct": true
      },
      {
        "text": "The PSU reducing voltage to the CPU",
        "correct": false
      },
      {
        "text": "The CPU entering a low-power state to reduce energy consumption",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "5.1 - Troubleshooting Hardware",
    "type": "SELECT",
    "question": "What is the most appropriate immediate action when a burning smell is detected coming from a computer case?",
    "options": [
      {
        "text": "Disconnect all external devices and peripherals",
        "correct": false
      },
      {
        "text": "Inspect physical components for burn marks or discoloration",
        "correct": false
      },
      {
        "text": "Disable performance-boosting features in the OS to mitigate heat",
        "correct": false
      },
      {
        "text": "Shut down the system and unplug it from a power source",
        "correct": true
      }
    ]
  },
  {
    "unitTitle": "5.1 - Troubleshooting Hardware",
    "type": "SELECT",
    "question": "Which of the following could lead to unexpected shutdowns in a computer system?",
    "options": [
      {
        "text": "Dust buildup restricting airflow",
        "correct": false
      },
      {
        "text": "Overheating CPU/GPU",
        "correct": false
      },
      {
        "text": "Memory errors or failing RAM modules",
        "correct": false
      },
      {
        "text": "Failing or underpowered PSU",
        "correct": false
      },
      {
        "text": "Software corruption or misconfiguration",
        "correct": false
      },
      {
        "text": "All of the above",
        "correct": true
      }
    ]
  },
  {
    "unitTitle": "5.1 - Troubleshooting Hardware",
    "type": "SELECT",
    "question": "Which of the actions listed below can help maintain system stability and prevent hardware-related crashes?",
    "options": [
      {
        "text": "Cleaning internal components with compressed air to remove dust buildup",
        "correct": false
      },
      {
        "text": "Replacing or reapplying CPU thermal paste as needed",
        "correct": false
      },
      {
        "text": "Conducting memory diagnostics tests",
        "correct": false
      },
      {
        "text": "Installing a PSU that meets or exceeds power requirements",
        "correct": false
      },
      {
        "text": "All of the above",
        "correct": true
      }
    ]
  },
  {
    "unitTitle": "5.1 - Troubleshooting Hardware",
    "type": "SELECT",
    "question": "Which of the following tools in Windows can help troubleshoot unresponsive apps and identify potential causes of application crashes?",
    "options": [
      {
        "text": "Event Viewer",
        "correct": false
      },
      {
        "text": "Task Manager",
        "correct": false
      },
      {
        "text": "Reliability Monitor",
        "correct": false
      },
      {
        "text": "All of the above",
        "correct": true
      }
    ]
  },
  {
    "unitTitle": "5.1 - Troubleshooting Hardware",
    "type": "SELECT",
    "question": "A user reports a popping sound from their computer, followed by it shutting down. What is the most probable cause?",
    "options": [
      {
        "text": "Failing hard drive",
        "correct": false
      },
      {
        "text": "Power surge from the wall outlet",
        "correct": false
      },
      {
        "text": "Static electricity discharge",
        "correct": false
      },
      {
        "text": "Blown capacitor",
        "correct": true
      }
    ]
  },
  {
    "unitTitle": "5.1 - Troubleshooting Hardware",
    "type": "SELECT",
    "question": "A visual inspection of a motherboard reveals a capacitor with a rounded top. What is the best course of action?",
    "options": [
      {
        "text": "Use a voltage meter to test the capacitor's charge",
        "correct": false
      },
      {
        "text": "Gently press down on the top of the capacitor",
        "correct": false
      },
      {
        "text": "Ignore it unless the system starts showing problems",
        "correct": false
      },
      {
        "text": "Replace the motherboard or affected component",
        "correct": true
      }
    ]
  },
  {
    "unitTitle": "5.1 - Troubleshooting Hardware",
    "type": "SELECT",
    "question": "What should be done if a computer’s system date and time reset every time it is powered off, despite being set correctly in the OS?",
    "options": [
      {
        "text": "Verify CMOS jumper settings",
        "correct": false
      },
      {
        "text": "Enable automatic time synchronization",
        "correct": false
      },
      {
        "text": "Update the system BIOS firmware",
        "correct": false
      },
      {
        "text": "Replace the CMOS battery",
        "correct": true
      }
    ]
  },
  {
    "unitTitle": "5.2 - Troubleshooting Storage Devices",
    "type": "SELECT",
    "question": "On a RAID array drive LED, what does a solid green state typically indicate?",
    "options": [
      {
        "text": "Drive is powered and operating normally",
        "correct": true
      },
      {
        "text": "Drive is actively reading, writing, or rebuilding data",
        "correct": false
      },
      {
        "text": "Drive requires attention (typically indicates a warning, degraded state, or pending failure)",
        "correct": false
      },
      {
        "text": "Drive has failed or encountered a critical error",
        "correct": false
      },
      {
        "text": "Drive is unpowered, missing, or not properly connected",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "5.2 - Troubleshooting Storage Devices",
    "type": "SELECT",
    "question": "On a RAID array drive LED, what does a blinking green state typically indicate?",
    "options": [
      {
        "text": "Drive is powered and operating normally",
        "correct": false
      },
      {
        "text": "Drive is actively reading, writing, or rebuilding data",
        "correct": true
      },
      {
        "text": "Drive requires attention (typically indicates a warning, degraded state, or pending failure)",
        "correct": false
      },
      {
        "text": "Drive has failed or encountered a critical error",
        "correct": false
      },
      {
        "text": "Drive is unpowered, missing, or not properly connected",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "5.2 - Troubleshooting Storage Devices",
    "type": "SELECT",
    "question": "On a RAID array drive LED, what does a solid amber/orange state typically indicate?",
    "options": [
      {
        "text": "Drive is powered and operating normally",
        "correct": false
      },
      {
        "text": "Drive is actively reading, writing, or rebuilding data",
        "correct": false
      },
      {
        "text": "Drive requires attention (typically indicates a warning, degraded state, or pending failure)",
        "correct": true
      },
      {
        "text": "Drive has failed or encountered a critical error",
        "correct": false
      },
      {
        "text": "Drive is unpowered, missing, or not properly connected",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "5.2 - Troubleshooting Storage Devices",
    "type": "SELECT",
    "question": "On a RAID array drive LED, what does a solid red state typically indicate?",
    "options": [
      {
        "text": "Drive is powered and operating normally",
        "correct": false
      },
      {
        "text": "Drive is actively reading, writing, or rebuilding data",
        "correct": false
      },
      {
        "text": "Drive requires attention (typically indicates a warning, degraded state, or pending failure)",
        "correct": false
      },
      {
        "text": "Drive has failed or encountered a critical error",
        "correct": true
      },
      {
        "text": "Drive is unpowered, missing, or not properly connected",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "5.2 - Troubleshooting Storage Devices",
    "type": "SELECT",
    "question": "On a RAID array, what does no LED activity on a drive typically indicate?",
    "options": [
      {
        "text": "Drive is powered and operating normally",
        "correct": false
      },
      {
        "text": "Drive is actively reading, writing, or rebuilding data",
        "correct": false
      },
      {
        "text": "Drive requires attention (typically indicates a warning, degraded state, or pending failure)",
        "correct": false
      },
      {
        "text": "Drive has failed or encountered a critical error",
        "correct": false
      },
      {
        "text": "Drive is unpowered, missing, or not properly connected",
        "correct": true
      }
    ]
  },
  {
    "unitTitle": "5.2 - Troubleshooting Storage Devices",
    "type": "SELECT",
    "question": "Grinding noises in a storage drive usually indicate mechanical wear or damage, while clicking sounds often signal read/write head failures or electronic issues. In both cases, the recommended course of action should be data backup and drive replacement.",
    "options": [
      {
        "text": "True",
        "correct": true
      },
      {
        "text": "False",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "5.2 - Troubleshooting Storage Devices",
    "type": "SELECT",
    "question": "Grinding noises and clicking sounds are problem symptoms exclusive to:",
    "options": [
      {
        "text": "RAM drives",
        "correct": false
      },
      {
        "text": "SSD drives",
        "correct": false
      },
      {
        "text": "HDD drives",
        "correct": true
      },
      {
        "text": "USB drives",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "5.2 - Troubleshooting Storage Devices",
    "type": "SELECT",
    "question": "During startup, a computer displays a \"No bootable devices found\" message. Troubleshooting reveals a misconfigured boot sequence. Where can a technician adjust the boot device order?",
    "options": [
      {
        "text": "Disk Management utility",
        "correct": false
      },
      {
        "text": "BIOS/UEFI settings",
        "correct": true
      },
      {
        "text": "OS boot loader",
        "correct": false
      },
      {
        "text": "Windows Command Prompt",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "5.2 - Troubleshooting Storage Devices",
    "type": "SELECT",
    "question": "Which proactive measure helps minimize data loss due to drive corruption?",
    "options": [
      {
        "text": "Daily system restore points",
        "correct": false
      },
      {
        "text": "Automated file integrity checks",
        "correct": false
      },
      {
        "text": "Periodic disk defragmentation",
        "correct": false
      },
      {
        "text": "Scheduled full disk backups",
        "correct": true
      }
    ]
  },
  {
    "unitTitle": "5.2 - Troubleshooting Storage Devices",
    "type": "SELECT",
    "question": "A technician discovers that critical files in a RAID configuration are becoming corrupted and some data is missing. Which troubleshooting action should be performed first to determine if the drives are failing?",
    "options": [
      {
        "text": "Check the RAID controller firmware for updates and compatibility",
        "correct": false
      },
      {
        "text": "Review operating system logs for disk-related errors",
        "correct": false
      },
      {
        "text": "Evaluate the storage devices’ self-monitoring diagnostic data for anomalies",
        "correct": true
      },
      {
        "text": "Back up all data before initiating any troubleshooting steps",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "5.2 - Troubleshooting Storage Devices",
    "type": "MULTI_SELECT",
    "question": "Which of the steps listed below are not considered best practice when addressing a RAID array that has failed? (Select 2 answers)",
    "options": [
      {
        "text": "Access the RAID controller utility to review logs of events, errors, and drive status",
        "correct": false
      },
      {
        "text": "Check power and data cables to ensure no drive appears failed due to a loose or disconnected cable",
        "correct": false
      },
      {
        "text": "Verify the integrity of existing backups before attempting any repairs or rebuilds",
        "correct": false
      },
      {
        "text": "Replace the faulty drive with a component of the same or greater capacity and compatible specifications",
        "correct": false
      },
      {
        "text": "Force the RAID configuration to auto-rebuild by cycling power repeatedly",
        "correct": true
      },
      {
        "text": "Delete the current RAID configuration and rebuild the array from scratch",
        "correct": true
      }
    ]
  },
  {
    "unitTitle": "5.2 - Troubleshooting Storage Devices",
    "type": "SELECT",
    "question": "Restoring a RAID array after physical failure of one of the drives may involve a relatively straightforward step, namely, replacing the failed drive. This method applies to most RAID configurations except for:",
    "options": [
      {
        "text": "RAID 0",
        "correct": true
      },
      {
        "text": "RAID 1",
        "correct": false
      },
      {
        "text": "RAID 5",
        "correct": false
      },
      {
        "text": "RAID 6",
        "correct": false
      },
      {
        "text": "RAID 10",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "5.2 - Troubleshooting Storage Devices",
    "type": "SELECT",
    "question": "What is the primary purpose of S.M.A.R.T. in a storage media drive?",
    "options": [
      {
        "text": "Automatic correction of detected drive errors",
        "correct": false
      },
      {
        "text": "Real-time monitoring and regulation of power consumption",
        "correct": false
      },
      {
        "text": "Prediction and reporting of impending drive failures",
        "correct": true
      },
      {
        "text": "Optimization of drive read/write speeds",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "5.2 - Troubleshooting Storage Devices",
    "type": "SELECT",
    "question": "A technician notices longer than normal file transfer times on a system using a mechanical hard drive. What is the first diagnostic action they should consider?",
    "options": [
      {
        "text": "Run disk cleanup utility",
        "correct": false
      },
      {
        "text": "Check network adapter settings",
        "correct": false
      },
      {
        "text": "Perform disk defragmentation",
        "correct": true
      },
      {
        "text": "Adjust paging file size",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "5.2 - Troubleshooting Storage Devices",
    "type": "SELECT",
    "question": "Which of the following metrics plays a role in diagnosing the declining performance of a storage drive?",
    "options": [
      {
        "text": "RPM",
        "correct": false
      },
      {
        "text": "I/O",
        "correct": false
      },
      {
        "text": "LBA",
        "correct": false
      },
      {
        "text": "IOPS",
        "correct": true
      }
    ]
  },
  {
    "unitTitle": "5.2 - Troubleshooting Storage Devices",
    "type": "SELECT",
    "question": "A computer's internal storage drive is not detected in the BIOS/UEFI or within the operating system's Disk Management utility. What is the most likely first troubleshooting step to resolve this issue?",
    "options": [
      {
        "text": "Initialize the drive",
        "correct": false
      },
      {
        "text": "Examine system logs for errors",
        "correct": false
      },
      {
        "text": "Inspect the drive's power and data cable connections",
        "correct": true
      },
      {
        "text": "Format the drive",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "5.2 - Troubleshooting Storage Devices",
    "type": "SELECT",
    "question": "If a storage drive does not appear in the OS, one possible cause is that the drive has been disabled at the firmware level.",
    "options": [
      {
        "text": "True",
        "correct": true
      },
      {
        "text": "False",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "5.2 - Troubleshooting Storage Devices",
    "type": "SELECT",
    "question": "What action should be taken if a drive is missing in the OS but appears in Disk Management as \"Unallocated\"?",
    "options": [
      {
        "text": "Modify OS settings to show hidden items",
        "correct": false
      },
      {
        "text": "Initialize and format the drive",
        "correct": true
      },
      {
        "text": "Change device access permissions for the current user",
        "correct": false
      },
      {
        "text": "Enable the drive in BIOS/UEFI settings",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "5.2 - Troubleshooting Storage Devices",
    "type": "SELECT",
    "question": "Which of the following is the most likely cause of a missing RAID array?",
    "options": [
      {
        "text": "Failed drive in the array",
        "correct": false
      },
      {
        "text": "Incorrect RAID controller settings",
        "correct": false
      },
      {
        "text": "Disconnected or loose cable",
        "correct": false
      },
      {
        "text": "All of the above",
        "correct": true
      }
    ]
  },
  {
    "unitTitle": "5.2 - Troubleshooting Storage Devices",
    "type": "MULTI_SELECT",
    "question": "What should be the initial troubleshooting steps when a RAID array is missing from the system? (Select 2 answers)",
    "options": [
      {
        "text": "Examine whether other non-RAID drives are functioning normally",
        "correct": false
      },
      {
        "text": "Check for loose/disconnected cables or a poorly seated RAID controller card",
        "correct": true
      },
      {
        "text": "Verify that the system has adequate power supply wattage",
        "correct": false
      },
      {
        "text": "Ensure the RAID controller is recognized and enabled in the BIOS/UEFI settings",
        "correct": true
      },
      {
        "text": "Confirm if the RAID array is visible in the OS Disk Management tool",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "5.2 - Troubleshooting Storage Devices",
    "type": "MULTI_SELECT",
    "question": "If a RAID array is producing audible alarms, what does this typically indicate? (Select 2 answers)",
    "options": [
      {
        "text": "System overheating",
        "correct": false
      },
      {
        "text": "Pending reboot request",
        "correct": false
      },
      {
        "text": "Drive failure",
        "correct": true
      },
      {
        "text": "Insufficient power supply",
        "correct": false
      },
      {
        "text": "Array degradation",
        "correct": true
      }
    ]
  },
  {
    "unitTitle": "5.3 - Troubleshooting Display Issues",
    "type": "SELECT",
    "question": "What is the most common cause when a display shows No Signal even though the device is powered on?",
    "options": [
      {
        "text": "Outdated display driver",
        "correct": false
      },
      {
        "text": "Faulty GPU",
        "correct": false
      },
      {
        "text": "Loose power cable",
        "correct": false
      },
      {
        "text": "Incorrect input source",
        "correct": true
      }
    ]
  },
  {
    "unitTitle": "5.3 - Troubleshooting Display Issues",
    "type": "SELECT",
    "question": "A user connects their laptop to an external monitor with an HDMI cable, but the monitor displays a distorted image. What should be done first to solve this problem?",
    "options": [
      {
        "text": "Verify correct input selection using the display’s menu",
        "correct": false
      },
      {
        "text": "Update the monitor's firmware to the latest version",
        "correct": false
      },
      {
        "text": "Restart the connected device to reset display configuration",
        "correct": false
      },
      {
        "text": "Ensure the HDMI cable is not damaged or loose",
        "correct": true
      }
    ]
  },
  {
    "unitTitle": "5.3 - Troubleshooting Display Issues",
    "type": "MULTI_SELECT",
    "question": "Which standard troubleshooting steps can help identify physical cabling issues with a display? (Select 3 answers)",
    "options": [
      {
        "text": "Adjust the cable length to improve signal quality",
        "correct": false
      },
      {
        "text": "Inspect the cable for visible damage",
        "correct": true
      },
      {
        "text": "Ensure the cable is securely connected to both the device and the display",
        "correct": true
      },
      {
        "text": "Test the connection with a different cable",
        "correct": true
      },
      {
        "text": "Verify the cable's bend radius is within specifications",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "5.3 - Troubleshooting Display Issues",
    "type": "SELECT",
    "question": "What is the most common symptom of a burnt-out projector bulb?",
    "options": [
      {
        "text": "The projector powers on, but no image is displayed",
        "correct": true
      },
      {
        "text": "The projector displays a dim or distorted image",
        "correct": false
      },
      {
        "text": "The projector fails to detect any input sources",
        "correct": false
      },
      {
        "text": "The projector shuts down immediately after powering on",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "5.3 - Troubleshooting Display Issues",
    "type": "SELECT",
    "question": "A user reports that their monitor's image appears blurry or unfocused, even after brightness and contrast have been properly adjusted. The text and icons look indistinct. What is the most likely cause of this problem?",
    "options": [
      {
        "text": "Outdated monitor firmware",
        "correct": false
      },
      {
        "text": "Incorrect display resolution setting",
        "correct": true
      },
      {
        "text": "Monitor backlight issue",
        "correct": false
      },
      {
        "text": "Video screen burn-in",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "5.3 - Troubleshooting Display Issues",
    "type": "SELECT",
    "question": "A computer monitor used in a retail store's point-of-sale system constantly shows a static application interface with a prominent logo. Over time, a faint ghost of that logo becomes visible even when other applications are open or the display is turned off. What is the most likely cause of this persistent image?",
    "options": [
      {
        "text": "Damaged inverter",
        "correct": false
      },
      {
        "text": "Backlight bleed",
        "correct": false
      },
      {
        "text": "Afterimage effect",
        "correct": false
      },
      {
        "text": "Display burn-in",
        "correct": true
      }
    ]
  },
  {
    "unitTitle": "5.3 - Troubleshooting Display Issues",
    "type": "SELECT",
    "question": "Persistent image retention occurs when static images remain on a screen for extended periods, causing uneven pixel degradation over time. This happens because the same pixels are repeatedly used to display identical visual elements, leading them to wear out faster than surrounding pixels. The key to preventing this issue is to avoid prolonged static content. Regularly changing on-screen elements, using dynamic screensavers, rotating interface layouts, or scheduling periods where the display is turned off or blanked out allow pixels to rest and recover. These preventive measures help minimize uneven wear and reduce the risk of permanent image retention.",
    "options": [
      {
        "text": "True",
        "correct": true
      },
      {
        "text": "False",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "5.3 - Troubleshooting Display Issues",
    "type": "SELECT",
    "question": "A technician is diagnosing an LCD panel where one pixel remains black at all times and never changes color. Which troubleshooting step should be attempted first?",
    "options": [
      {
        "text": "Switch the monitor off and unplug it for an extended period",
        "correct": false
      },
      {
        "text": "Apply light, localized pressure to the affected pixel area",
        "correct": false
      },
      {
        "text": "Use an app that flashes primary colors or high-contrast patterns",
        "correct": false
      },
      {
        "text": "Tap the screen around the affected pixel with a soft object",
        "correct": false
      },
      {
        "text": "None of the above",
        "correct": true
      }
    ]
  },
  {
    "unitTitle": "5.3 - Troubleshooting Display Issues",
    "type": "SELECT",
    "question": "Which of the troubleshooting steps listed below would not address a monitor displaying washed-out or incorrect colors?",
    "options": [
      {
        "text": "Update graphics and display drivers",
        "correct": false
      },
      {
        "text": "Verify cable connection integrity",
        "correct": false
      },
      {
        "text": "Adjust the monitor brightness level",
        "correct": true
      },
      {
        "text": "Check color calibration settings",
        "correct": false
      },
      {
        "text": "Reset monitor to factory defaults",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "5.3 - Troubleshooting Display Issues",
    "type": "MULTI_SELECT",
    "question": "Which digital display interfaces provide the capability for transmission of audio data? (Select 2 answers)",
    "options": [
      {
        "text": "HDMI",
        "correct": true
      },
      {
        "text": "DVI",
        "correct": false
      },
      {
        "text": "S-Video",
        "correct": false
      },
      {
        "text": "DisplayPort",
        "correct": true
      },
      {
        "text": "VGA",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "5.3 - Troubleshooting Display Issues",
    "type": "SELECT",
    "question": "If a monitor with built-in speakers is not producing sound, the common issue could be that:",
    "options": [
      {
        "text": "The system’s microphone is interfering with speaker output",
        "correct": false
      },
      {
        "text": "The sound output in the OS is routed to a different audio playback device",
        "correct": true
      },
      {
        "text": "The audio effects and enhancements settings cause driver conflicts",
        "correct": false
      },
      {
        "text": "The monitor’s audio output is blocked by an incompatible audio format",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "5.3 - Troubleshooting Display Issues",
    "type": "SELECT",
    "question": "Which hardware component is most likely to cause a dim image on an LCD monitor?",
    "options": [
      {
        "text": "Malfunctioning backlight",
        "correct": true
      },
      {
        "text": "Damaged inverter board",
        "correct": false
      },
      {
        "text": "Loose monitor power cable",
        "correct": false
      },
      {
        "text": "Overheating video adapter",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "5.3 - Troubleshooting Display Issues",
    "type": "SELECT",
    "question": "A laptop display appears dim when running on battery power but brightens when plugged into AC power. What is the most probable cause?",
    "options": [
      {
        "text": "The AC adapter overrides adaptive brightness features",
        "correct": false
      },
      {
        "text": "The laptop's battery is undercharged and affecting the display",
        "correct": false
      },
      {
        "text": "The laptop is in power-saving mode with reduced brightness",
        "correct": true
      },
      {
        "text": "The display inverter is misconfigured for battery use",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "5.3 - Troubleshooting Display Issues",
    "type": "SELECT",
    "question": "Which of the issues listed below is least likely to cause an intermittent shutdown in a projector?",
    "options": [
      {
        "text": "Insufficient voltage supply",
        "correct": false
      },
      {
        "text": "Malfunctioning cooling fan",
        "correct": false
      },
      {
        "text": "Improperly seated video cable",
        "correct": true
      },
      {
        "text": "Dust buildup in air filters",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "5.3 - Troubleshooting Display Issues",
    "type": "SELECT",
    "question": "A technician installs a new widescreen monitor. The image appears stretched and blurry. Which action should they take first?",
    "options": [
      {
        "text": "Modify the contrast ratio to enhance display sharpness",
        "correct": false
      },
      {
        "text": "Decrease the screen scaling percentage in the OS display settings",
        "correct": false
      },
      {
        "text": "Adjust the display resolution to match the monitor’s native resolution",
        "correct": true
      },
      {
        "text": "Update the monitor's firmware to the latest version",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "5.3 - Troubleshooting Display Issues",
    "type": "SELECT",
    "question": "A user reports that their monitor displays random artifacts and flickering colored pixels. What is a common hardware cause for this type of distortion?",
    "options": [
      {
        "text": "Overheating or failing graphics card",
        "correct": true
      },
      {
        "text": "Faulty monitor power supply",
        "correct": false
      },
      {
        "text": "Damaged backlight in the monitor",
        "correct": false
      },
      {
        "text": "Outdated or corrupted display driver",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "5.3 - Troubleshooting Display Issues",
    "type": "SELECT",
    "question": "A monitor intermittently displays a distorted, garbled image with misaligned colors and jagged text. Which step should a technician take first?",
    "options": [
      {
        "text": "Update the monitor's firmware",
        "correct": false
      },
      {
        "text": "Test the monitor with a different power cable",
        "correct": false
      },
      {
        "text": "Switch to an alternate video input port",
        "correct": false
      },
      {
        "text": "Reseat or replace the video cable",
        "correct": true
      }
    ]
  },
  {
    "unitTitle": "5.4 - Troubleshooting Mobile Devices",
    "type": "SELECT",
    "question": "A user reports that their mobile phone's battery drains very quickly, even when not in heavy use. The phone is also noticeably warm to the touch. Which of the following is the most likely initial step a technician should try to troubleshoot this problem?",
    "options": [
      {
        "text": "Adjust the device's display timeout settings",
        "correct": false
      },
      {
        "text": "Calibrate the battery by fully discharging and recharging",
        "correct": false
      },
      {
        "text": "Inspect the phone’s charging port for physical damage",
        "correct": false
      },
      {
        "text": "Check for excessive background application activity",
        "correct": true
      }
    ]
  },
  {
    "unitTitle": "5.4 - Troubleshooting Mobile Devices",
    "type": "SELECT",
    "question": "If a mobile device's battery shows slight swelling but the device is still functioning, it is safe to continue using it until the swelling becomes more pronounced. The swelling occurs due to gas buildup inside the battery, often caused by internal chemical reactions resulting from age, damage, or overcharging. A possible solution to address this issue is to carefully puncture the battery to release the gas, preventing further expansion.",
    "options": [
      {
        "text": "True",
        "correct": false
      },
      {
        "text": "False",
        "correct": true
      }
    ]
  },
  {
    "unitTitle": "5.4 - Troubleshooting Mobile Devices",
    "type": "SELECT",
    "question": "Backing up a mobile device’s data is always recommended before replacing a broken screen, even if the device appears to be functioning normally.",
    "options": [
      {
        "text": "True",
        "correct": true
      },
      {
        "text": "False",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "5.4 - Troubleshooting Mobile Devices",
    "type": "SELECT",
    "question": "What is the first step to take when troubleshooting a mobile device that is not charging properly?",
    "options": [
      {
        "text": "Remove the battery and reinsert it before charging",
        "correct": false
      },
      {
        "text": "Check the charging cable and adapter for physical damage",
        "correct": true
      },
      {
        "text": "Verify the wall outlet is providing power",
        "correct": false
      },
      {
        "text": "Consult the device's user manual for charging tips",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "5.4 - Troubleshooting Mobile Devices",
    "type": "SELECT",
    "question": "Which tool is best suited to check for power delivery issues when a mobile device is not charging properly?",
    "options": [
      {
        "text": "Voltage tester",
        "correct": false
      },
      {
        "text": "Diagnostic software",
        "correct": false
      },
      {
        "text": "Cable continuity tester",
        "correct": false
      },
      {
        "text": "USB multimeter",
        "correct": true
      }
    ]
  },
  {
    "unitTitle": "5.4 - Troubleshooting Mobile Devices",
    "type": "SELECT",
    "question": "To preserve the lifespan of a mobile device's battery, it is best to regularly allow the battery to fully discharge before recharging it back to 100%. For modern mobile devices, this practice helps preserve the lifespan of the battery and prevents capacity degradation over time.",
    "options": [
      {
        "text": "True",
        "correct": false
      },
      {
        "text": "False",
        "correct": true
      }
    ]
  },
  {
    "unitTitle": "5.4 - Troubleshooting Mobile Devices",
    "type": "SELECT",
    "question": "A user reports their mobile device frequently loses Wi-Fi connection or cannot connect to any networks. What is the best first troubleshooting step?",
    "options": [
      {
        "text": "Remove and reinsert the device's SIM card",
        "correct": false
      },
      {
        "text": "Perform a hard reboot (forced restart) of the device",
        "correct": false
      },
      {
        "text": "Forget all networks from the device's saved Wi-Fi list and try to reconnect",
        "correct": false
      },
      {
        "text": "Restart the device’s Wi-Fi adapter to reset the connection",
        "correct": true
      }
    ]
  },
  {
    "unitTitle": "5.4 - Troubleshooting Mobile Devices",
    "type": "SELECT",
    "question": "If a mobile device intermittently loses Wi-Fi connection, which action will have no effect on improving its stability?",
    "options": [
      {
        "text": "Move closer to the Wi-Fi router or access point",
        "correct": false
      },
      {
        "text": "Restart the Wi-Fi adapter on the device",
        "correct": false
      },
      {
        "text": "Check for and reduce Wi-Fi interference from other devices",
        "correct": false
      },
      {
        "text": "Forget and reconnect to the Wi-Fi network",
        "correct": false
      },
      {
        "text": "Disable mobile data to prioritize Wi-Fi connection",
        "correct": true
      }
    ]
  },
  {
    "unitTitle": "5.4 - Troubleshooting Mobile Devices",
    "type": "SELECT",
    "question": "A user reports their mobile phone has no cellular signal (no bars) and cannot make or receive calls or texts. What is the most common initial step a technician should try?",
    "options": [
      {
        "text": "Perform a network settings reset on the device",
        "correct": false
      },
      {
        "text": "Clear the device's cached data related to cellular services",
        "correct": false
      },
      {
        "text": "Toggle airplane mode on and off to reestablish signal",
        "correct": true
      },
      {
        "text": "Verify that the cellular data plan is active and not exhausted",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "5.4 - Troubleshooting Mobile Devices",
    "type": "SELECT",
    "question": "Which of the actions listed below would have little to no impact on preventing a mobile device from overheating?",
    "options": [
      {
        "text": "Keeping the device out of intense heat sources",
        "correct": false
      },
      {
        "text": "Using an original or certified device charger",
        "correct": false
      },
      {
        "text": "Closing unused background applications",
        "correct": false
      },
      {
        "text": "Reducing screen brightness",
        "correct": false
      },
      {
        "text": "Enabling built-in power-saving features",
        "correct": false
      },
      {
        "text": "Keeping the device’s operating system and installed apps up to date",
        "correct": false
      },
      {
        "text": "Activating dark mode to reduce screen glare",
        "correct": true
      }
    ]
  },
  {
    "unitTitle": "5.4 - Troubleshooting Mobile Devices",
    "type": "MULTI_SELECT",
    "question": "Which of the following measures reduce the risk of digitizer issues on a mobile device? (Select 3 answers)",
    "options": [
      {
        "text": "Avoid dropping the device or applying excessive pressure to the screen",
        "correct": true
      },
      {
        "text": "Use a high-quality case and screen guard for impact resistance",
        "correct": true
      },
      {
        "text": "Keep the device away from moisture and extreme temperatures",
        "correct": true
      },
      {
        "text": "Limit the use of the stylus to prevent unnecessary wear on the touchscreen",
        "correct": false
      },
      {
        "text": "Use a thicker screen protector to shield against extreme impacts",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "5.4 - Troubleshooting Mobile Devices",
    "type": "SELECT",
    "question": "After dropping their tablet, a user notices that a section of the touchscreen no longer registers any input. What is the first troubleshooting step they should take?",
    "options": [
      {
        "text": "Check if the device is overheating",
        "correct": false
      },
      {
        "text": "Apply light, localized pressure to the affected area",
        "correct": false
      },
      {
        "text": "Power cycle the device",
        "correct": true
      },
      {
        "text": "Remove the screen protector and test the touch response",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "5.4 - Troubleshooting Mobile Devices",
    "type": "SELECT",
    "question": "Which of the actions listed below would be of help while troubleshooting a non-responsive touchscreen on a mobile device?",
    "options": [
      {
        "text": "Perform a soft reset (restart the device using a key combination)",
        "correct": false
      },
      {
        "text": "Remove screen protector and clean the touchscreen surface",
        "correct": false
      },
      {
        "text": "Boot into safe mode to check for app conflicts",
        "correct": false
      },
      {
        "text": "Perform a factory reset to restore default settings (after backing up data)",
        "correct": false
      },
      {
        "text": "All of the above",
        "correct": true
      }
    ]
  },
  {
    "unitTitle": "5.4 - Troubleshooting Mobile Devices",
    "type": "SELECT",
    "question": "A technician suspects a mobile device's USB-C port is physically damaged because it only charges when the cable is held at a specific angle. What is the most appropriate next step?",
    "options": [
      {
        "text": "Replace the charging port",
        "correct": false
      },
      {
        "text": "Test with a known working cable",
        "correct": true
      },
      {
        "text": "Retry plugging in after removing the device case",
        "correct": false
      },
      {
        "text": "Switch to a wireless charger",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "5.4 - Troubleshooting Mobile Devices",
    "type": "SELECT",
    "question": "Which approach works best for eliminating persistent malware from a mobile device?",
    "options": [
      {
        "text": "Uninstalling suspicious or unknown apps",
        "correct": false
      },
      {
        "text": "Performing a hard reset of the device",
        "correct": false
      },
      {
        "text": "Troubleshooting in safe mode",
        "correct": false
      },
      {
        "text": "Running a reputable anti-malware scan",
        "correct": false
      },
      {
        "text": "Performing a factory reset of the device",
        "correct": true
      }
    ]
  },
  {
    "unitTitle": "5.4 - Troubleshooting Mobile Devices",
    "type": "SELECT",
    "question": "Installing mobile apps from sources such as Apple’s App Store or Google Play significantly reduces the risk of malware infections.",
    "options": [
      {
        "text": "True",
        "correct": true
      },
      {
        "text": "False",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "5.4 - Troubleshooting Mobile Devices",
    "type": "SELECT",
    "question": "Which of the answers listed below refers to a common fix for cursor drift?",
    "options": [
      {
        "text": "Modify touch sensitivity settings",
        "correct": false
      },
      {
        "text": "Restart the touchscreen driver service",
        "correct": false
      },
      {
        "text": "Test the device with a stylus (if applicable)",
        "correct": false
      },
      {
        "text": "Calibrate the touchscreen",
        "correct": true
      }
    ]
  },
  {
    "unitTitle": "5.4 - Troubleshooting Mobile Devices",
    "type": "SELECT",
    "question": "A user is unable to install a new app on their mobile phone. Which option should be considered first when attempting to resolve this problem?",
    "options": [
      {
        "text": "Verify app store login status",
        "correct": false
      },
      {
        "text": "Clear the app store cache and data",
        "correct": false
      },
      {
        "text": "Update the OS to the latest version",
        "correct": false
      },
      {
        "text": "Check available storage space",
        "correct": true
      }
    ]
  },
  {
    "unitTitle": "5.4 - Troubleshooting Mobile Devices",
    "type": "SELECT",
    "question": "While sideloading an app onto an Android phone for testing purposes, a user receives a notification that the installation has been blocked due to security settings. What must be changed to proceed with the installation?",
    "options": [
      {
        "text": "Grant administrator privileges to the app",
        "correct": false
      },
      {
        "text": "Disable app verification in Google Play settings",
        "correct": false
      },
      {
        "text": "Enable the \"Install unknown apps\" or \"Unknown sources\" setting",
        "correct": true
      },
      {
        "text": "Turn on developer options in system settings",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "5.4 - Troubleshooting Mobile Devices",
    "type": "SELECT",
    "question": "A company’s MDM administrator receives multiple tickets from users stating that they cannot install updates for existing apps or download new ones. Which of the following is the most likely reason?",
    "options": [
      {
        "text": "App store outage",
        "correct": false
      },
      {
        "text": "Pending security updates",
        "correct": false
      },
      {
        "text": "Compatibility issues",
        "correct": false
      },
      {
        "text": "Policy enforcement",
        "correct": true
      }
    ]
  },
  {
    "unitTitle": "5.4 - Troubleshooting Mobile Devices",
    "type": "SELECT",
    "question": "A user reports the stylus has stopped responding on their touchscreen device. What is the first practical troubleshooting step a technician should try?",
    "options": [
      {
        "text": "Reboot the device to reset touch inputs",
        "correct": false
      },
      {
        "text": "Clean the screen protector with a soft cloth",
        "correct": false
      },
      {
        "text": "Reset the device’s Wi-Fi connection",
        "correct": false
      },
      {
        "text": "Verify the stylus battery status",
        "correct": true
      }
    ]
  },
  {
    "unitTitle": "5.4 - Troubleshooting Mobile Devices",
    "type": "SELECT",
    "question": "A device’s stylus functions intermittently, while the touchscreen responds normally to finger input. Which troubleshooting action should be considered first?",
    "options": [
      {
        "text": "Attempt to reconnect the stylus to the device",
        "correct": false
      },
      {
        "text": "Recalibrate the touchscreen for proper alignment",
        "correct": false
      },
      {
        "text": "Inspect the stylus tip for damage or wear",
        "correct": true
      },
      {
        "text": "Test the input after removing the screen protector",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "5.4 - Troubleshooting Mobile Devices",
    "type": "SELECT",
    "question": "A user attempts to connect a Bluetooth stylus to their tablet but it does not appear in the device’s Bluetooth list. What device mode should the user confirm the stylus is in?",
    "options": [
      {
        "text": "Input mode",
        "correct": false
      },
      {
        "text": "Discovery mode",
        "correct": false
      },
      {
        "text": "Sync mode",
        "correct": false
      },
      {
        "text": "Pairing mode",
        "correct": true
      }
    ]
  },
  {
    "unitTitle": "5.4 - Troubleshooting Mobile Devices",
    "type": "SELECT",
    "question": "A mobile device experiences a sudden, significant drop in performance, accompanied by unusual pop-ups and battery drain. What is the most likely cause of the problem?",
    "options": [
      {
        "text": "Low battery health",
        "correct": false
      },
      {
        "text": "Excessive push notifications",
        "correct": false
      },
      {
        "text": "Disabled pop-up blocker",
        "correct": false
      },
      {
        "text": "Malware infection",
        "correct": true
      }
    ]
  },
  {
    "unitTitle": "5.5 - Troubleshooting Networks",
    "type": "SELECT",
    "question": "Wireless connectivity issues can be caused by physical obstructions and electronic interference. Dense objects like heavy household items or large appliances can weaken Wi-Fi signals, especially when using the 5 GHz frequency, which has a shorter range and weaker penetration through walls and obstacles. Positioning the router in a central, elevated, and open location helps improve coverage. Electronic interference from devices such as microwaves, cordless phones, or Bluetooth equipment can disrupt signals, particularly on the 2.4 GHz band. In such cases, switching to the 5 GHz band or selecting a less congested wireless channel can help reduce interference and improve connection stability.",
    "options": [
      {
        "text": "True",
        "correct": true
      },
      {
        "text": "False",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "5.5 - Troubleshooting Networks",
    "type": "SELECT",
    "question": "When troubleshooting intermittent wireless connectivity, what tool can a technician use to measure signal strength and detect potential dead zones?",
    "options": [
      {
        "text": "Bandwidth tester",
        "correct": false
      },
      {
        "text": "Power level controls",
        "correct": false
      },
      {
        "text": "Wi-Fi analyzer",
        "correct": true
      },
      {
        "text": "Network mapper",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "5.5 - Troubleshooting Networks",
    "type": "SELECT",
    "question": "A user’s laptop connects to the wireless network, but the connection is unstable and frequently drops, even after forcing reconnection and restarting the system. Other nearby devices on the same network are functioning normally. Which action should the technician take to resolve the problem?",
    "options": [
      {
        "text": "Scan the laptop for malware and viruses",
        "correct": false
      },
      {
        "text": "Check the router's logs for unusual activity",
        "correct": false
      },
      {
        "text": "Update or reinstall the laptop's wireless adapter driver",
        "correct": true
      },
      {
        "text": "Connect to a different Wi-Fi network",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "5.5 - Troubleshooting Networks",
    "type": "MULTI_SELECT",
    "question": "Which troubleshooting steps can help resolve intermittent wireless connectivity caused by external interference? (Select 2 answers)",
    "options": [
      {
        "text": "Restarting the wireless access point",
        "correct": false
      },
      {
        "text": "Disabling SSID broadcast",
        "correct": false
      },
      {
        "text": "Reducing the number of connected devices",
        "correct": false
      },
      {
        "text": "Switching frequency bands",
        "correct": true
      },
      {
        "text": "Changing the wireless channel",
        "correct": true
      }
    ]
  },
  {
    "unitTitle": "5.5 - Troubleshooting Networks",
    "type": "SELECT",
    "question": "During a network performance audit, a technician observes that several wired workstations are consistently negotiating connections at 100 Mbps, despite having Gigabit Ethernet NICs and being connected to a Gigabit switch. What is the most probable physical layer cause for this speed limitation?",
    "options": [
      {
        "text": "Outdated firmware on the network switch",
        "correct": false
      },
      {
        "text": "Excessive network traffic causing congestion",
        "correct": false
      },
      {
        "text": "Older cabling type not supporting higher transfer rates",
        "correct": true
      },
      {
        "text": "Switch port speed manually set to 100 Mbps",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "5.5 - Troubleshooting Networks",
    "type": "MULTI_SELECT",
    "question": "Which symptoms are most likely to indicate that slow network speeds are caused by network congestion rather than a hardware or software issue? (Select 2 answers)",
    "options": [
      {
        "text": "The issue occurs intermittently without a clear pattern",
        "correct": false
      },
      {
        "text": "The slowness affects only one specific device",
        "correct": false
      },
      {
        "text": "The issue results from throttling imposed by the ISP",
        "correct": false
      },
      {
        "text": "The slowness is noticeable across multiple devices",
        "correct": true
      },
      {
        "text": "The issue occurs during specific, busy periods",
        "correct": true
      },
      {
        "text": "The slowness affects only specific types of network traffic",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "5.5 - Troubleshooting Networks",
    "type": "SELECT",
    "question": "What is the most likely cause of limited network connectivity if a Windows machine is assigned an IP address in the 169.254.x.x range?",
    "options": [
      {
        "text": "DNS",
        "correct": false
      },
      {
        "text": "DHCP",
        "correct": true
      },
      {
        "text": "NAT",
        "correct": false
      },
      {
        "text": "DDoS",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "5.5 - Troubleshooting Networks",
    "type": "SELECT",
    "question": "A network admin can successfully ping a remote host by its IP address but cannot do so by its domain name. What is the most probable cause of this issue?",
    "options": [
      {
        "text": "NIC",
        "correct": false
      },
      {
        "text": "ICMP",
        "correct": false
      },
      {
        "text": "DNS",
        "correct": true
      },
      {
        "text": "DHCP",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "5.5 - Troubleshooting Networks",
    "type": "SELECT",
    "question": "What is jitter in the context of network performance?",
    "options": [
      {
        "text": "Loss of data packets",
        "correct": false
      },
      {
        "text": "Signal attenuation",
        "correct": false
      },
      {
        "text": "Variation in packet delay",
        "correct": true
      },
      {
        "text": "Packet fragmentation",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "5.5 - Troubleshooting Networks",
    "type": "SELECT",
    "question": "Which network application types are most sensitive to jitter?",
    "options": [
      {
        "text": "Web browsing",
        "correct": false
      },
      {
        "text": "Email",
        "correct": false
      },
      {
        "text": "File transfer",
        "correct": false
      },
      {
        "text": "Real-time",
        "correct": true
      }
    ]
  },
  {
    "unitTitle": "5.5 - Troubleshooting Networks",
    "type": "SELECT",
    "question": "During a VoIP call, a user hears their own voice echoing back to them with a slight delay. Which network performance issue is this symptom most indicative of?",
    "options": [
      {
        "text": "High latency",
        "correct": true
      },
      {
        "text": "Jitter",
        "correct": false
      },
      {
        "text": "Packet loss",
        "correct": false
      },
      {
        "text": "Audio syncing",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "5.5 - Troubleshooting Networks",
    "type": "SELECT",
    "question": "What is the most likely cause of choppy or distorted audio during a VoIP call?",
    "options": [
      {
        "text": "Outdated VoIP software",
        "correct": false
      },
      {
        "text": "Jitter",
        "correct": true
      },
      {
        "text": "Faulty microphone hardware",
        "correct": false
      },
      {
        "text": "Corrupted audio codec",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "5.5 - Troubleshooting Networks",
    "type": "SELECT",
    "question": "What is the primary purpose of a jitter buffer in VoIP systems?",
    "options": [
      {
        "text": "To compress audio data",
        "correct": false
      },
      {
        "text": "To improve call stability",
        "correct": false
      },
      {
        "text": "To reduce packet loss",
        "correct": false
      },
      {
        "text": "To even out packet delays",
        "correct": true
      }
    ]
  },
  {
    "unitTitle": "5.5 - Troubleshooting Networks",
    "type": "SELECT",
    "question": "The term \"Port flapping\" refers to a condition where a network port light, typically on a switch or router, rapidly alternates between up and down states. In such cases, the port’s status LED may blink erratically as it continuously loses and regains connection.",
    "options": [
      {
        "text": "True",
        "correct": true
      },
      {
        "text": "False",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "5.5 - Troubleshooting Networks",
    "type": "MULTI_SELECT",
    "question": "Which network issues are directly linked to port flapping? (Select 2 answers)",
    "options": [
      {
        "text": "Intermittent connectivity",
        "correct": true
      },
      {
        "text": "Degraded data transfer speeds",
        "correct": true
      },
      {
        "text": "High network latency",
        "correct": false
      },
      {
        "text": "Permanent loss of connectivity",
        "correct": false
      },
      {
        "text": "Excessive bandwidth usage",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "5.5 - Troubleshooting Networks",
    "type": "SELECT",
    "question": "What is the recommended first step when troubleshooting port flapping?",
    "options": [
      {
        "text": "Check physical connections",
        "correct": true
      },
      {
        "text": "Restart the device",
        "correct": false
      },
      {
        "text": "Disable all unused physical ports",
        "correct": false
      },
      {
        "text": "Update the device's firmware",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "5.5 - Troubleshooting Networks",
    "type": "SELECT",
    "question": "What condition may lead to increased latency on a network?",
    "options": [
      {
        "text": "Network congestion due to excessive traffic",
        "correct": false
      },
      {
        "text": "Physical distance between the sender and receiver of data",
        "correct": false
      },
      {
        "text": "Wireless interference and signal degradation",
        "correct": false
      },
      {
        "text": "Outdated or inefficient network hardware",
        "correct": false
      },
      {
        "text": "All of the above",
        "correct": true
      }
    ]
  },
  {
    "unitTitle": "5.5 - Troubleshooting Networks",
    "type": "SELECT",
    "question": "Which of the solutions listed below has no direct impact on decreasing network latency?",
    "options": [
      {
        "text": "Using wired connections instead of wireless when possible",
        "correct": false
      },
      {
        "text": "Reducing network congestion",
        "correct": false
      },
      {
        "text": "Implementing VLANs to segment network traffic",
        "correct": true
      },
      {
        "text": "Reducing physical distance between network devices",
        "correct": false
      },
      {
        "text": "Upgrading hardware and infrastructure",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "5.5 - Troubleshooting Networks",
    "type": "SELECT",
    "question": "Which type of network cabling is most susceptible to external interference?",
    "options": [
      {
        "text": "UTP",
        "correct": true
      },
      {
        "text": "STP",
        "correct": false
      },
      {
        "text": "Fiber optic",
        "correct": false
      },
      {
        "text": "Coaxial",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "5.5 - Troubleshooting Networks",
    "type": "SELECT",
    "question": "Which network cabling provides immunity against external interference?",
    "options": [
      {
        "text": "UTP",
        "correct": false
      },
      {
        "text": "STP",
        "correct": false
      },
      {
        "text": "Fiber optic",
        "correct": true
      },
      {
        "text": "Coaxial",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "5.5 - Troubleshooting Networks",
    "type": "SELECT",
    "question": "For a wireless client to successfully connect and authenticate to a Wi-Fi network, the security type (e.g., WEP, WPA, WPA2, or WPA3) and encryption type (e.g., TKIP or AES) settings on the connecting host must match the corresponding wireless security settings on a WAP.",
    "options": [
      {
        "text": "True",
        "correct": true
      },
      {
        "text": "False",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "5.5 - Troubleshooting Networks",
    "type": "SELECT",
    "question": "Which of the following can result in an authentication failure even if the username and password are typed correctly?",
    "options": [
      {
        "text": "Expired user password",
        "correct": false
      },
      {
        "text": "User account locked out",
        "correct": false
      },
      {
        "text": "Disabled or deleted user account",
        "correct": false
      },
      {
        "text": "Time synchronization issues",
        "correct": false
      },
      {
        "text": "All of the above",
        "correct": true
      }
    ]
  },
  {
    "unitTitle": "5.5 - Troubleshooting Networks",
    "type": "SELECT",
    "question": "A technician is called to a small office where users are experiencing random Internet connection drops. Network cabling has been checked and confirmed to be intact, and ping tests to the local gateway remain successful even during the outages. The office uses a commercial-grade router and switch, both of which pass diagnostics, but the router's admin interface logs show repeated signal loss on the WAN side. What is the most appropriate next step?",
    "options": [
      {
        "text": "Restart the router",
        "correct": false
      },
      {
        "text": "Modify firewall rules on the router",
        "correct": false
      },
      {
        "text": "Run Internet speed test",
        "correct": false
      },
      {
        "text": "Contact the ISP",
        "correct": true
      }
    ]
  },
  {
    "unitTitle": "5.6 - Troubleshooting Printers",
    "type": "SELECT",
    "question": "In laser printing, vertical lines appearing on each output page indicate a problem related to the:",
    "options": [
      {
        "text": "Imaging drum",
        "correct": true
      },
      {
        "text": "Printer driver",
        "correct": false
      },
      {
        "text": "Fuser unit",
        "correct": false
      },
      {
        "text": "Printhead nozzles",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "5.6 - Troubleshooting Printers",
    "type": "SELECT",
    "question": "Which of the troubleshooting steps listed below would resolve vertical lines on the output pages of an inkjet printer?",
    "options": [
      {
        "text": "Replacing the imaging drum",
        "correct": false
      },
      {
        "text": "Updating printer drivers",
        "correct": false
      },
      {
        "text": "Cleaning printheads",
        "correct": true
      },
      {
        "text": "Replacing the toner cartridge",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "5.6 - Troubleshooting Printers",
    "type": "SELECT",
    "question": "Garbled characters on printed pages typically indicate a problem with how the printer receives or interprets data. Common causes include faulty or outdated printer drivers, corrupted print jobs, or communication errors between the computer and the printer. Other potential factors include mismatched page description languages (such as PCL vs. PostScript), incorrect printer configurations, damaged interface cables, or formatting issues at the application level.",
    "options": [
      {
        "text": "True",
        "correct": true
      },
      {
        "text": "False",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "5.6 - Troubleshooting Printers",
    "type": "SELECT",
    "question": "Which of the following issues is least likely to contribute to paper jams in printers?",
    "options": [
      {
        "text": "Paper path obstructed by foreign objects",
        "correct": false
      },
      {
        "text": "Curled or deformed paper sheets",
        "correct": false
      },
      {
        "text": "Incorrect paper size or type",
        "correct": false
      },
      {
        "text": "High humidity levels affecting paper",
        "correct": false
      },
      {
        "text": "Overloaded paper tray",
        "correct": false
      },
      {
        "text": "Dirty or worn paper pickup rollers",
        "correct": false
      },
      {
        "text": "Incorrect page orientation settings",
        "correct": true
      }
    ]
  },
  {
    "unitTitle": "5.6 - Troubleshooting Printers",
    "type": "MULTI_SELECT",
    "question": "Which of the steps listed below are not considered best practices when clearing printer paper jams? (Select 2 answers)",
    "options": [
      {
        "text": "Open all access doors and trays to gain a clear view of the paper path",
        "correct": false
      },
      {
        "text": "Inspect all areas of the paper path for torn fragments or debris",
        "correct": false
      },
      {
        "text": "Check for worn or dirty paper pickup rollers",
        "correct": false
      },
      {
        "text": "Apply mild force (if necessary) to pull jammed paper in the opposite feed direction",
        "correct": true
      },
      {
        "text": "Keep the printer powered on and try another print job to see if the jam resolves automatically",
        "correct": true
      },
      {
        "text": "Power cycle the printer after clearing jam to reset sensors",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "5.6 - Troubleshooting Printers",
    "type": "SELECT",
    "question": "Which of the following answers refers to a common cause of faded printouts in a laser printer?",
    "options": [
      {
        "text": "Near-empty ink cartridges",
        "correct": false
      },
      {
        "text": "Dried ink buildup in printhead nozzles",
        "correct": false
      },
      {
        "text": "Low or uneven toner levels",
        "correct": true
      },
      {
        "text": "Misaligned printheads",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "5.6 - Troubleshooting Printers",
    "type": "MULTI_SELECT",
    "question": "Which of the issues listed below are common causes of faded printouts in inkjet printers? (Select 2 answers)",
    "options": [
      {
        "text": "Incorrect toner density",
        "correct": false
      },
      {
        "text": "Worn-out drum unit",
        "correct": false
      },
      {
        "text": "Low ink levels",
        "correct": true
      },
      {
        "text": "Insufficient fuser heat",
        "correct": false
      },
      {
        "text": "Clogged printhead nozzles",
        "correct": true
      }
    ]
  },
  {
    "unitTitle": "5.6 - Troubleshooting Printers",
    "type": "SELECT",
    "question": "A user reports that their printer is frequently pulling two or more sheets of paper at once, leading to jams or blank pages mixed with printed ones. What should a technician check for to resolve the problem?",
    "options": [
      {
        "text": "Paper quality issues",
        "correct": false
      },
      {
        "text": "Worn or faulty separation pad",
        "correct": false
      },
      {
        "text": "Overfilled paper tray",
        "correct": false
      },
      {
        "text": "Worn or dirty pickup rollers",
        "correct": false
      },
      {
        "text": "Humidity affecting paper",
        "correct": false
      },
      {
        "text": "All of the above",
        "correct": true
      }
    ]
  },
  {
    "unitTitle": "5.6 - Troubleshooting Printers",
    "type": "SELECT",
    "question": "A user reports that several documents are stuck in the print queue and not printing. What should a technician try first?",
    "options": [
      {
        "text": "Clear all print jobs from the queue",
        "correct": false
      },
      {
        "text": "Verify the network connection status",
        "correct": false
      },
      {
        "text": "Check for paper jams in the printer",
        "correct": false
      },
      {
        "text": "Restart the print spooler service",
        "correct": true
      }
    ]
  },
  {
    "unitTitle": "5.6 - Troubleshooting Printers",
    "type": "MULTI_SELECT",
    "question": "What are the most common causes of speckling on printed pages in a laser printer? (Select 3 answers)",
    "options": [
      {
        "text": "Leaking toner cartridge",
        "correct": true
      },
      {
        "text": "Paper dust, debris, or excess toner buildup",
        "correct": true
      },
      {
        "text": "Contaminated or faulty imaging drum",
        "correct": true
      },
      {
        "text": "Partially clogged or dirty printhead nozzles",
        "correct": false
      },
      {
        "text": "Defective ink cartridge",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "5.6 - Troubleshooting Printers",
    "type": "SELECT",
    "question": "In laser printers, double or echo images on the printed page are often caused by a residual latent image on the imaging drum being reused during the same print cycle. Troubleshooting steps include checking the drum for wear or residual toner buildup, verifying that the fuser is operating at the correct temperature and effectively bonding the toner to the paper, and replacing any faulty components as needed.",
    "options": [
      {
        "text": "True",
        "correct": true
      },
      {
        "text": "False",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "5.6 - Troubleshooting Printers",
    "type": "SELECT",
    "question": "On the CompTIA A+ exam, the term \"Finishing issues\" in the context of the printing process refers to post-printing problems related to additional functionalities offered by some office printers, such as stapling documents and punching holes in printouts. The problem of staple jams can be solved by accessing the staple cartridge or staple compartment on the printer and manually removing any jammed staples. For printers that can punch holes in documents, a common maintenance task would be locating the hole-punch waste container on the printer and emptying its contents. Adjusting the placement of staples and holes on the printed document can be performed via the printer's software.",
    "options": [
      {
        "text": "True",
        "correct": true
      },
      {
        "text": "False",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "5.6 - Troubleshooting Printers",
    "type": "SELECT",
    "question": "Which of the print configuration options listed below would be the best place to verify default page orientation settings?",
    "options": [
      {
        "text": "Printer driver settings",
        "correct": true
      },
      {
        "text": "Application settings",
        "correct": false
      },
      {
        "text": "Print dialog options",
        "correct": false
      },
      {
        "text": "Printer utility settings",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "5.6 - Troubleshooting Printers",
    "type": "SELECT",
    "question": "Which of the following is the least likely cause of a printer failing to recognize a paper tray?",
    "options": [
      {
        "text": "A dirty or malfunctioning paper tray sensor",
        "correct": false
      },
      {
        "text": "Use of lower-grade, inexpensive, or recycled paper",
        "correct": true
      },
      {
        "text": "Printer settings that do not match the paper type or size",
        "correct": false
      },
      {
        "text": "Unseated or improperly inserted paper tray",
        "correct": false
      }
    ]
  },
  {
    "unitTitle": "5.6 - Troubleshooting Printers",
    "type": "SELECT",
    "question": "Which of the actions listed below would be of help when troubleshooting connectivity issues related to a network printer?",
    "options": [
      {
        "text": "Verify physical connections (cables, power)",
        "correct": false
      },
      {
        "text": "Restart devices (printer, router/modem, computer)",
        "correct": false
      },
      {
        "text": "Check firewall settings on the computer and network",
        "correct": false
      },
      {
        "text": "Update printer drivers to the latest version",
        "correct": false
      },
      {
        "text": "Check the printer's IP configuration settings",
        "correct": false
      },
      {
        "text": "Uninstall/reinstall printer software on the computer",
        "correct": false
      },
      {
        "text": "All of the above",
        "correct": true
      }
    ]
  },
  {
    "unitTitle": "5.6 - Troubleshooting Printers",
    "type": "SELECT",
    "question": "Which of the following actions is least likely to solve the problem of a frozen print queue on a printer?",
    "options": [
      {
        "text": "Restart the Print Spooler service",
        "correct": false
      },
      {
        "text": "Manually cancel all pending jobs in the printer settings",
        "correct": false
      },
      {
        "text": "Power cycle the computer and/or printer",
        "correct": false
      },
      {
        "text": "Update or reinstall the printer driver/software",
        "correct": false
      },
      {
        "text": "Change the printer's default output tray",
        "correct": true
      }
    ]
  }
];

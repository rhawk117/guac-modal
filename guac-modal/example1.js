import { Modal, ModalHTML } from "./modal.js";

function basicExample() {
  const modal = new Modal();
  const modalTabData1 = [
    {
      tabContext: {
        tabId: "general",
        title: "General Info",
        fasIcon: "fas fa-info-circle",
      },
      tabContent: [
        $("<h3>").text("General Information"),
        ModalHTML.createField({ title: "Node ID", value: "NODE_123" }),
        ModalHTML.createField({ title: "Status", value: "Active" }),
        ModalHTML.createField({ title: "Created", value: "2024-01-15" }),
        ModalHTML.createField({ title: "Last Updated", value: "2024-03-20" }),
      ],
    },
    {
      tabContext: {
        tabId: "details",
        title: "Details",
        fasIcon: "fas fa-details",
      },
      tabContent: [
        ModalHTML.createCollapsible("Performance Metrics", [
          { title: "CPU Usage", value: "45%" },
          { title: "Memory Usage", value: "2.5GB" },
          { title: "Network Traffic", value: "1.2GB/s" },
        ]),
        ModalHTML.createCollapsible("Security Information", [
          { title: "Last Security Scan", value: "2024-03-19" },
          { title: "Vulnerabilities Found", value: "None" },
          { title: "Security Level", value: "High" },
        ]),
        ModalHTML.createCollapsible("Configuration", [
          { title: "OS Version", value: "Linux 5.15" },
          { title: "Environment", value: "Production" },
          { title: "Region", value: "US-East" },
        ]),
      ],
    },
    {
      tabContext: {
        tabId: "settings",
        title: "Settings",
        fasIcon: "fas fa-cogs",
      },
      tabContent: [
        $("<h3>").text("Settings"),
        $("<p>").text("This is the settings tab content."),
        $("<form>").append(
          $("<div>").append(
            $("<label>").append(
              $('<input type="checkbox">').attr("name", "notifications"),
              " Enable notifications"
            )
          ),
          $("<div>").append(
            $("<label>").append(
              $('<input type="checkbox">').attr("name", "auto-update"),
              " Auto-update"
            )
          ),
          $("<div>").append(
            $("<label>").append(
              $("<select>")
                .append(
                  $("<option>").text("Low"),
                  $("<option>").text("Medium"),
                  $("<option>").text("High")
                )
                .attr("name", "priority-level"),
              " Priority Level"
            )
          )
        ),
      ],
    },
  ];

  const modalTabData2 = [
    {
      tabContext: {
        tabId: "overview",
        title: "Overview",
        fasIcon: "fas fa-clipboard-list",
      },
      tabContent: [
        $("<h3>").text("Project Overview"),
        ModalHTML.createField({
          title: "Project Name",
          value: "AI Development",
        }),
        ModalHTML.createField({ title: "Team Lead", value: "Jane Doe" }),
        ModalHTML.createField({ title: "Deadline", value: "2024-12-31" }),
      ],
    },
    {
      tabContext: {
        tabId: "tasks",
        title: "Tasks",
        fasIcon: "fas fa-tasks",
      },
      tabContent: [
        ModalHTML.createCollapsible("Frontend", [
          { title: "Task 1", value: "Design landing page" },
          { title: "Task 2", value: "Implement responsive layout" },
        ]),
        ModalHTML.createCollapsible("Backend", [
          { title: "Task 1", value: "Set up database" },
          { title: "Task 2", value: "Develop API endpoints" },
        ]),
        ModalHTML.createCollapsible("Testing", [
          { title: "Task 1", value: "Unit testing" },
          { title: "Task 2", value: "Integration testing" },
        ]),
      ],
    },
    {
      tabContext: {
        tabId: "resources",
        title: "Resources",
        fasIcon: "fas fa-book",
      },
      tabContent: [
        $("<h3>").text("Resources"),
        $("<ul>").append(
          $("<li>").text("Project Plan"),
          $("<li>").text("Design Mockups"),
          $("<li>").text("API Documentation")
        ),
      ],
    },
  ];

  $("#openModalBtn").on("click", () => {
    modal.init("Node Information", modalTabData1);
    modal.openModal();
  });

  $("#openProjectModalBtn").on("click", () => {
    modal.init("Project Overview", modalTabData2);
    modal.openModal();
  });
}

function controlsDemo() {
  const modal = new Modal();

  const nodeControlsTabData = [
    {
      tabContext: {
        tabId: "node-controls",
        title: "Node Controls",
        fasIcon: "fas fa-sliders-h",
      },
      tabContent: [
        $("<button>")
          .addClass("control-button btn-connect")
          .attr("aria-label", "Connect To").html(`
            <i class="icon fas fa-plug"></i>
            Connect To
        `),

        // Kill Connection Button
        $("<button>")
          .addClass("control-button btn-kill")
          .attr("aria-label", "Kill Connection").html(`
            <i class="fas fa-smile"></i>
            Kill Connection
        `),
        
        // timeline button
        $("<button>")
          .addClass("control-button btn-timeline")
          .attr("aria-label", "Timeline").html(`
            <i class="fas fa-chart-line"></i>
              Timeline
        `),
      ],
    },
  ];

  $("#openModalBtn").on("click", () => {
    modal.init("Node Controls", nodeControlsTabData);
    modal.openModal();
  });

  $(document).on("click", ".btn-connect", function () {
    $(this).addClass("clicked");
    setTimeout(() => {
      $(this).removeClass("clicked");
    }, 1500); 
  });

  $(document).on("click", ".btn-kill", function () {
    $(this).addClass("clicked");
    setTimeout(() => {
      $(this).removeClass("clicked");
    }, 3000); 
  });
  $(document).on("click", ".btn-timeline", function () {
    $(this).toggleClass("active");
  });
}


$(document).ready(function () {
  basicExample();
  controlsDemo();
});

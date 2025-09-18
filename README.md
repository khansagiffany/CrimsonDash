# Futuristic Sales Dashboard

A modern, responsive sales dashboard built with Next.js 15, TypeScript, and Tailwind CSS following atomic design principles. Features interactive charts, custom filtering, and a futuristic red theme.

## 🚀 Features

- **Interactive Charts**: Bar, line, and pie charts using Recharts
- **Multi-year Data**: Sales visualization for 2022, 2023, and 2024
- **Custom Filtering**: Set sales thresholds with interactive input
- **Responsive Design**: Mobile-first approach with modern UI
- **Atomic Design**: Organized component structure for scalability
- **TypeScript**: Full type safety throughout the application
- **Futuristic Theme**: Modern red (#820000) based color scheme

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Charts**: Recharts
- **Icons**: Lucide React
- **Architecture**: Atomic Design Principles

## 📁 Project Structure

```
src/
├── app/
│   ├── dashboard/          # Dashboard page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx          # Home page
├── components/
│   ├── atoms/            # Basic UI elements
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   └── Label.tsx
│   ├── molecules/        # Simple combinations
│   │   ├── ChartLegend.tsx
│   │   └── FilterControl.tsx
│   ├── organisms/        # Complex components
│   │   ├── BarChart.tsx
│   │   ├── LineChart.tsx
│   │   ├── PieChart.tsx
│   │   └── SalesOverview.tsx
│   └── templates/        # Page layouts
│       └── DashboardLayout.tsx
├── data/
│   └── salesData.ts     # Mock sales data
├── types/
│   └── sales.ts         # TypeScript definitions
└── lib/
    └── utils.ts         # Utility functions
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/futuristic-sales-dashboard.git
   cd futuristic-sales-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📊 Data Source

The dashboard uses mock sales data inspired by typical e-commerce datasets. The data includes:
- **Monthly Sales**: Revenue data for each month (2022-2024)
- **Product Categories**: Electronics, Clothing, Books, Home & Garden, Sports
- **Regional Data**: Sales across different regions
- **Customer Metrics**: Order counts and average order values

## 🎯 Key Components

### Atomic Design Implementation

- **Atoms**: Basic UI elements (Button, Input, Label)
- **Molecules**: FilterControl, ChartLegend
- **Organisms**: Chart components (Bar, Line, Pie), SalesOverview
- **Templates**: DashboardLayout for consistent page structure
- **Pages**: Dashboard page combining all components

### Chart Types

1. **Bar Chart**: Monthly sales comparison across years
2. **Line Chart**: Sales trends over time
3. **Pie Chart**: Sales distribution by category

## 🔧 Customization

### Theme Colors
The futuristic red theme uses the primary color `#820000`. You can customize colors in `tailwind.config.ts`:

```typescript
theme: {
  extend: {
    colors: {
      primary: '#820000',
      // Add more custom colors
    }
  }
}
```

### Adding New Charts
1. Create a new chart component in `src/components/organisms/`
2. Follow the existing pattern using Recharts
3. Add the component to the dashboard page

### Custom Filters
Extend the filtering system by:
1. Adding new filter types in `FilterControl.tsx`
2. Updating the data processing logic
3. Integrating with chart components

## 🌐 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

### Other Platforms
- **Netlify**: Use `npm run build` and deploy the `out` folder
- **Docker**: Use the included Dockerfile
- **Self-hosted**: Build with `npm run build` and serve the `.next` folder

## 🔄 Future Enhancements

- [ ] **API Integration**: Replace mock data with real API calls
- [ ] **User Authentication**: Add login/logout functionality  
- [ ] **Data Export**: Export charts as images or PDFs
- [ ] **Real-time Updates**: WebSocket integration for live data
- [ ] **Advanced Filtering**: Date ranges, multiple categories
- [ ] **Dark Mode**: Toggle between light and dark themes
- [ ] **Mobile App**: React Native version

## 📈 Performance Optimizations

- **Code Splitting**: Automatic with Next.js App Router
- **Image Optimization**: Next.js Image component
- **Static Generation**: Pre-rendered pages where possible
- **Bundle Analysis**: Use `@next/bundle-analyzer`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Recharts**: For the excellent charting library
- **Tailwind CSS**: For the utility-first CSS framework
- **Lucide React**: For the beautiful icons
- **Next.js Team**: For the amazing framework

## 📞 Support

If you have any questions or need help, please:
- Open an issue on GitHub
- Check the documentation
- Join our community discussions

---

**Built with ❤️ using Next.js 15 and modern web technologies**
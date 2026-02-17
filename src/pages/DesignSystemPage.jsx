import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';

const DesignSystemPage = () => {
    return (
        <MainLayout
            title="Design System Showcase"
            description="Verifying the calm, intentional, and coherent design system for KodNest Premium."
        >
            <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-10">

                {/* Primary Workspace Area - 70% roughly in a real app, here adapting to grid */}
                <div className="lg:col-span-2 space-y-10">
                    <Card title="Typography & Colors">
                        <div className="space-y-6">
                            <div>
                                <h1 className="text-4xl font-serif text-primary-text mb-2">Heading 1 (Merriweather)</h1>
                                <h2 className="text-3xl font-serif text-primary-text mb-2">Heading 2 (Merriweather)</h2>
                                <h3 className="text-2xl font-serif text-primary-text mb-2">Heading 3 (Merriweather)</h3>
                                <p className="text-base text-primary-text/80 max-w-prose">
                                    Body text (Inter). Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Nullam quis risus eget urna mollis ornare vel eu leo.
                                    Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                                </p>
                            </div>
                            <div className="flex space-x-4">
                                <div className="h-16 w-16 bg-off-white border flex items-center justify-center text-xs">Off-White</div>
                                <div className="h-16 w-16 bg-primary-text text-white flex items-center justify-center text-xs">Primary</div>
                                <div className="h-16 w-16 bg-accent-red text-white flex items-center justify-center text-xs">Accent</div>
                                <div className="h-16 w-16 bg-muted-success text-white flex items-center justify-center text-xs">Success</div>
                                <div className="h-16 w-16 bg-muted-warning text-white flex items-center justify-center text-xs">Warning</div>
                            </div>
                        </div>
                    </Card>

                    <Card title="Input Fields">
                        <div className="space-y-6 max-w-md">
                            <Input
                                id="email"
                                label="Email Address"
                                placeholder="you@example.com"
                                type="email"
                            />
                            <Input
                                id="error-state"
                                label="Error State"
                                placeholder="Invalid input..."
                                error="This field is required"
                                defaultValue="Wrong Value"
                            />
                        </div>
                    </Card>

                    <Card title="Cards & Containers">
                        <p className="text-primary-text/60 mb-4">
                            Cards have subtle borders, no drop shadows, and balanced padding.
                            They provide a calm container for content.
                        </p>
                        <div className="bg-primary-text/5 p-4 border border-primary-text/10 rounded">
                            Nested content area (e.g. code snippet or output)
                        </div>
                    </Card>
                </div>

                {/* Secondary Panel Area - 30% */}
                <div className="space-y-10">
                    <Card title="Actions">
                        <div className="flex flex-col space-y-4">
                            <Button variant="primary">Primary Action</Button>
                            <Button variant="secondary">Secondary Action</Button>
                            <Button variant="primary" disabled>Disabled Action</Button>
                        </div>
                    </Card>

                    <Card title="Status Badges">
                        <div className="flex flex-col space-y-2 items-start">
                            <Badge status="Not Started" />
                            <Badge status="In Progress" />
                            <Badge status="Shipped" />
                        </div>
                    </Card>

                    <div className="bg-white p-6 border border-primary-text/10">
                        <h4 className="font-serif text-lg mb-2">Panel Content</h4>
                        <p className="text-sm text-primary-text/60 mb-4">
                            This represents the secondary panel for instructions or tools.
                        </p>
                        <div className="bg-primary-text/5 p-4 text-xs font-mono text-primary-text/60 mb-4">
                            System prompt copy box...
                        </div>
                        <Button variant="secondary" className="w-full text-sm">Copy Prompt</Button>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default DesignSystemPage;
